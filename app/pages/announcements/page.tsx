'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Loader2, Bell, ArrowLeft, Calendar, MapPin, Phone, Mail } from 'lucide-react';

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

  useEffect(() => {
    fetch('/api/admin/announcements')
      .then(res => res.json())
      .then(data => {
        setAnnouncements(Array.isArray(data) ? data.filter((a: Announcement) => a.isActive) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <Container>
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Announcements</h1>
              <p className="text-white/80 mt-2">Stay informed with the latest news and updates</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Announcements</h3>
              <p className="text-gray-500">Check back later for important updates</p>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-8">
              {announcements.map((announcement, index) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Bell className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <span className="text-orange-600 font-medium text-sm">Announcement</span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {formatDate(announcement.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {announcement.title}
                    </h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                        {announcement.content}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Posted {new Date(announcement.createdAt).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-gray-400">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">Cyahafi, Rwanda</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">+250 788 XXX XXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">info@cyahafi.ac.rw</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}