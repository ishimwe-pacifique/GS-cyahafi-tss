'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ExternalLink, Loader2, FileText, ArrowLeft, Download, Eye } from 'lucide-react';

interface Document {
  id: number;
  title: string;
  description: string | null;
  fileUrl: string | null;
  externalLink: string | null;
  category: string | null;
  isActive: boolean;
}

const categoryColors: Record<string, string> = {
  Syllabus: 'bg-blue-100 text-blue-700',
  Schedule: 'bg-green-100 text-green-700',
  Result: 'bg-orange-100 text-orange-700',
  Form: 'bg-purple-100 text-purple-700',
  Other: 'bg-gray-100 text-gray-700',
};

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetch('/api/admin/documents')
      .then(res => res.json())
      .then(data => {
        setDocuments(Array.isArray(data) ? data.filter((d: Document) => d.isActive) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = ['all', ...Array.from(new Set(documents.map(d => d.category).filter(Boolean)))];
  const filteredDocs = selectedCategory === 'all' 
    ? documents 
    : documents.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
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
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Documents</h1>
              <p className="text-white/80 mt-2">Download and view important school documents</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-8">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {cat === 'all' ? 'All Documents' : cat}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : filteredDocs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Documents Available</h3>
              <p className="text-gray-500">Check back later for important documents</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{doc.title}</h3>
                      {doc.category && (
                        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium ${categoryColors[doc.category] || 'bg-gray-100 text-gray-700'}`}>
                          {doc.category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {doc.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{doc.description}</p>
                  )}
                  
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {doc.fileUrl && (
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </a>
                    )}
                    {doc.externalLink && (
                      <a
                        href={doc.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                          doc.fileUrl 
                            ? 'border border-gray-200 text-gray-700 hover:bg-gray-50' 
                            : 'flex-1 bg-primary text-white hover:bg-primary/90'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Link
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}