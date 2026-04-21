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

interface Quiz {
  id: number;
  title: string;
  description: string | null;
  link: string;
  isActive: boolean;
  createdAt: string;
}

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState<Quiz | null>(null);
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
    fetchQuizzes();
  }, [searchParams]);

  const fetchQuizzes = async () => {
    try {
      const res = await fetch('/api/admin/quizzes');
      const data = await res.json();
      setQuizzes(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch quizzes:', error);
      setQuizzes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingQuiz ? `/api/admin/quizzes/${editingQuiz.id}` : '/api/admin/quizzes';
      const method = editingQuiz ? 'PUT' : 'POST';
      
      console.log('Submitting to:', url, 'method:', method, 'data:', formData);
      
      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);
      
      if (!res.ok) {
        alert(data.error || 'Failed to save');
        return;
      }

      setShowForm(false);
      setFormData({ title: '', description: '', link: '', isActive: true });
      setEditingQuiz(null);
      fetchQuizzes();
    } catch (error) {
      console.error('Error saving quiz:', error);
      alert('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this quiz?')) return;
    
    try {
      await fetch(`/api/admin/quizzes/${id}`, { 
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchQuizzes();
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  const handleEdit = (quiz: Quiz) => {
    setEditingQuiz(quiz);
    setFormData({
      title: quiz.title,
      description: quiz.description || '',
      link: quiz.link,
      isActive: quiz.isActive,
    });
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
          <p className="text-gray-600">Manage quiz links for students</p>
        </div>
        <Button onClick={() => { setShowForm(true); setEditingQuiz(null); setFormData({ title: '', description: '', link: '', isActive: true }); }}>
          <Plus className="w-4 h-4 mr-2" />
          Add Quiz
        </Button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {editingQuiz ? 'Edit Quiz' : 'Add New Quiz'}
            </h2>
            <button onClick={() => { setShowForm(false); setEditingQuiz(null); }} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Quiz title"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Quiz Link</label>
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
              {editingQuiz ? 'Update Quiz' : 'Add Quiz'}
            </Button>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : quizzes.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No quizzes yet. Click "Add Quiz" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${quiz.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {quiz.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  {quiz.description && (
                    <p className="text-gray-600 text-sm mb-2">{quiz.description}</p>
                  )}
                  <a 
                    href={quiz.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center gap-1"
                  >
                    {quiz.link}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(quiz)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(quiz.id)}>
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