import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { quizzes, exams, documents, announcements } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const [quizList, examList, docList, announcementList] = await Promise.all([
      db.select().from(quizzes).orderBy(desc(quizzes.createdAt)),
      db.select().from(exams).orderBy(desc(exams.createdAt)),
      db.select().from(documents).orderBy(desc(documents.createdAt)),
      db.select().from(announcements).orderBy(desc(announcements.createdAt)),
    ]);

    return NextResponse.json({
      quizzes: quizList.length,
      exams: examList.length,
      documents: docList.length,
      announcements: announcementList.length,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}