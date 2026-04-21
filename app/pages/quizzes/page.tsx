'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ExternalLink, Loader2, FileQuestion, ArrowLeft } from 'lucide-react';

interface Quiz {
  id: number;
  title: string;
  description: string | null;
  link: string;
  isActive: boolean;
}

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/quizzes')
      .then(res => res.json())
      .then(data => {
        setQuizzes(Array.isArray(data) ? data.filter((q: Quiz) => q.isActive) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-primary text-white py-16">
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
              <FileQuestion className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Quizzes</h1>
              <p className="text-white/80 mt-2">Test your knowledge with interactive quizzes</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : quizzes.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileQuestion className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Quizzes Available</h3>
              <p className="text-gray-500">Check back later for new quizzes</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz, index) => (
                <a
                  key={quiz.id}
                  href={quiz.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-6 shadow-sm border hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Quiz #{index + 1}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {quiz.title}
                  </h3>
                  {quiz.description && (
                    <p className="text-gray-600 text-sm line-clamp-2">{quiz.description}</p>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary font-medium text-sm flex items-center">
                      Start Quiz 
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}