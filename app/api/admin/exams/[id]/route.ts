import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { exams } from '@/lib/db/schema';
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
    await db.delete(exams).where(exams.id === parseInt(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Exam DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete exam' }, { status: 500 });
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

    const [updated] = await db.update(exams)
      .set({ title, description, link, isActive })
      .where(exams.id === parseInt(id))
      .returning();

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Exam PUT error:', error);
    return NextResponse.json({ error: 'Failed to update exam' }, { status: 500 });
  }
}