'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  FileQuestion, 
  ClipboardList, 
  FileText, 
  Bell,
  Plus,
  ExternalLink
} from 'lucide-react';

interface Stats {
  quizzes: number;
  exams: number;
  documents: number;
  announcements: number;
}

const cardItems = [
  { 
    title: 'Quizzes', 
    href: '/admin/dashboard/quizzes', 
    icon: FileQuestion, 
    color: 'bg-blue-500',
    description: 'Manage quiz links for students'
  },
  { 
    title: 'Exams', 
    href: '/admin/dashboard/exams', 
    icon: ClipboardList, 
    color: 'bg-purple-500',
    description: 'Manage exam links and schedules'
  },
  { 
    title: 'Documents', 
    href: '/admin/dashboard/documents', 
    icon: FileText, 
    color: 'bg-green-500',
    description: 'Upload and manage documents'
  },
  { 
    title: 'Announcements', 
    href: '/admin/dashboard/announcements', 
    icon: Bell, 
    color: 'bg-orange-500',
    description: 'Post announcements for students'
  },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({ quizzes: 0, exams: 0, documents: 0, announcements: 0 });
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('admin_user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
    
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back{user ? `, ${user.name}` : ''}!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cardItems.map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-600">{item.title}</p>
            <p className="text-2xl font-bold text-gray-900">
              {item.title === 'Quizzes' && stats.quizzes}
              {item.title === 'Exams' && stats.exams}
              {item.title === 'Documents' && stats.documents}
              {item.title === 'Announcements' && stats.announcements}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            href="/admin/dashboard/quizzes?action=new"
            className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <FileQuestion className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">Add New Quiz</span>
          </Link>
          <Link 
            href="/admin/dashboard/exams?action=new"
            className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <ClipboardList className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium">Add New Exam</span>
          </Link>
          <Link 
            href="/admin/dashboard/documents?action=new"
            className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <FileText className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">Upload Document</span>
          </Link>
          <Link 
            href="/admin/dashboard/announcements?action=new"
            className="flex items-center gap-3 p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Bell className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">New Announcement</span>
          </Link>
        </div>
      </div>
    </div>
  );
}