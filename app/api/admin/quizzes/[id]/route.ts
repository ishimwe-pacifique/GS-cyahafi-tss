import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { quizzes } from '@/lib/db/schema';
import { verifyToken } from '@/lib/db/auth';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = verifyToken(request.headers.get('authorization')?.replace('Bearer ', '') || '');
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    await db.delete(quizzes).where(quizzes.id === parseInt(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quiz DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete quiz' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = verifyToken(request.headers.get('authorization')?.replace('Bearer ', '') || '');
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { title, description, link, isActive } = body;

    const [updated] = await db.update(quizzes)
      .set({ title, description, link, isActive })
      .where(quizzes.id === parseInt(id))
      .returning();

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Quiz PUT error:', error);
    return NextResponse.json({ error: 'Failed to update quiz' }, { status: 500 });
  }
}