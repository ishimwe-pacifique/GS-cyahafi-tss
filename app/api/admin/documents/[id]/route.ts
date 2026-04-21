import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { documents } from '@/lib/db/schema';
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
    await db.delete(documents).where(documents.id === parseInt(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Document DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete document' }, { status: 500 });
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
    const { title, description, fileUrl, externalLink, category, isActive } = body;

    const [updated] = await db.update(documents)
      .set({ title, description, fileUrl, externalLink, category, isActive })
      .where(documents.id === parseInt(id))
      .returning();

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Document PUT error:', error);
    return NextResponse.json({ error: 'Failed to update document' }, { status: 500 });
  }
}