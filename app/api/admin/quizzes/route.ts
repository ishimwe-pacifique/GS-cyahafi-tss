import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { quizzes } from '@/lib/db/schema';

export async function GET(request: NextRequest) {
  try {
    const quizList = await db.select().from(quizzes).orderBy({ createdAt: { dir: 'desc' } });
    return NextResponse.json(quizList);
  } catch (error) {
    console.error('Quizzes GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch quizzes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, link, isActive = true } = body;

    console.log('Creating quiz with:', { title, description, link, isActive });

    if (!title || !link) {
      return NextResponse.json({ error: 'Title and link are required' }, { status: 400 });
    }

    const [newQuiz] = await db.insert(quizzes).values({
      title,
      description: description || null,
      link,
      isActive,
    }).returning();

    console.log('Created quiz:', newQuiz);
    return NextResponse.json(newQuiz, { status: 201 });
  } catch (error) {
    console.error('Quizzes POST error:', error);
    return NextResponse.json({ error: 'Failed to create quiz', details: String(error) }, { status: 500 });
  }
}