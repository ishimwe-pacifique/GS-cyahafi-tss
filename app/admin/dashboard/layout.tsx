'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileQuestion, 
  ClipboardList, 
  FileText, 
  Bell, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/quizzes', label: 'Quizzes', icon: FileQuestion },
  { href: '/admin/dashboard/exams', label: 'Exams', icon: ClipboardList },
  { href: '/admin/dashboard/documents', label: 'Documents', icon: FileText },
  { href: '/admin/dashboard/announcements', label: 'Announcements', icon: Bell },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200
          md:translate-x-0 md:static
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6 border-b">
            <div className="flex items-center gap-2">
              <img src="/logocyaha.png" alt="Logo" className="w-10 h-10" />
              <span className="font-bold text-lg">GS Cyahafi Admin</span>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Header */}
          <header className="md:hidden bg-white shadow-sm p-4 flex items-center justify-between">
            <span className="font-bold">Admin Dashboard</span>
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </header>

          {/* Overlay */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}