'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  ExternalLink, 
  Pencil, 
  Trash2, 
  X,
  Loader2 
} from 'lucide-react';

interface Exam {
  id: number;
  title: string;
  description: string | null;
  link: string;
  isActive: boolean;
  createdAt: string;
}

export default function ExamsPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingExam, setEditingExam] = useState<Exam | null>(null);
  const [saving, setSaving] = useState(false);
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    isActive: true,
  });

  const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  useEffect(() => {
    if (searchParams.get('action') === 'new') {
      setShowForm(true);
    }
    fetchExams();
  }, [searchParams]);

  const fetchExams = async () => {
    try {
      const res = await fetch('/api/admin/exams');
      const data = await res.json();
      setExams(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch exams:', error);
      setExams([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingExam ? `/api/admin/exams/${editingExam.id}` : '/api/admin/exams';
      const method = editingExam ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to save');
        return;
      }

      setShowForm(false);
      setFormData({ title: '', description: '', link: '', isActive: true });
      setEditingExam(null);
      fetchExams();
    } catch (error) {
      console.error('Error saving exam:', error);
      alert('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this exam?')) return;
    
    try {
      await fetch(`/api/admin/exams/${id}`, { 
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchExams();
    } catch (error) {
      console.error('Error deleting exam:', error);
    }
  };

  const handleEdit = (exam: Exam) => {
    setEditingExam(exam);
    setFormData({
      title: exam.title,
      description: exam.description || '',
      link: exam.link,
      isActive: exam.isActive,
    });
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Exams</h1>
          <p className="text-gray-600">Manage exam links and schedules</p>
        </div>
        <Button onClick={() => { setShowForm(true); setEditingExam(null); setFormData({ title: '', description: '', link: '', isActive: true }); }}>
          <Plus className="w-4 h-4 mr-2" />
          Add Exam
        </Button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {editingExam ? 'Edit Exam' : 'Add New Exam'}
            </h2>
            <button onClick={() => { setShowForm(false); setEditingExam(null); }} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Exam title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Optional description"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Exam Link</label>
              <Input
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="isActive" className="text-sm text-gray-700">Active</label>
            </div>
            <Button type="submit" disabled={saving}>
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editingExam ? 'Update Exam' : 'Add Exam'}
            </Button>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : exams.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No exams yet. Click "Add Exam" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {exams.map((exam) => (
            <div key={exam.id} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${exam.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {exam.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  {exam.description && (
                    <p className="text-gray-600 text-sm mb-2">{exam.description}</p>
                  )}
                  <a 
                    href={exam.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center gap-1"
                  >
                    {exam.link}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(exam)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(exam.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}