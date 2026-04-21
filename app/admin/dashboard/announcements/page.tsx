'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  X,
  Loader2,
  Bell 
} from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: string;
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [saving, setSaving] = useState(false);
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
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
    fetchAnnouncements();
  }, [searchParams]);

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/admin/announcements');
      const data = await res.json();
      setAnnouncements(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch announcements:', error);
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = editingAnnouncement ? `/api/admin/announcements/${editingAnnouncement.id}` : '/api/admin/announcements';
      const method = editingAnnouncement ? 'PUT' : 'POST';
      
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
      setFormData({ title: '', content: '', isActive: true });
      setEditingAnnouncement(null);
      fetchAnnouncements();
    } catch (error) {
      console.error('Error saving announcement:', error);
      alert('An error occurred while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;
    
    try {
      await fetch(`/api/admin/announcements/${id}`, { 
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      isActive: announcement.isActive,
    });
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
          <p className="text-gray-600">Post announcements for students</p>
        </div>
        <Button onClick={() => { setShowForm(true); setEditingAnnouncement(null); setFormData({ title: '', content: '', isActive: true }); }}>
          <Plus className="w-4 h-4 mr-2" />
          Add Announcement
        </Button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              {editingAnnouncement ? 'Edit Announcement' : 'Add New Announcement'}
            </h2>
            <button onClick={() => { setShowForm(false); setEditingAnnouncement(null); }} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Announcement title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your announcement here..."
                rows={6}
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
              {editingAnnouncement ? 'Update Announcement' : 'Add Announcement'}
            </Button>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : announcements.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No announcements yet. Click "Add Announcement" to create one.
        </div>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${announcement.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {announcement.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm whitespace-pre-wrap">{announcement.content}</p>
                  <p className="text-gray-400 text-xs mt-2">
                    {new Date(announcement.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(announcement)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(announcement.id)}>
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