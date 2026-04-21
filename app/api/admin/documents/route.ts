import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { documents } from '@/lib/db/schema';
import { verifyToken } from '@/lib/db/auth';

function getAuthUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '') 
    || request.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(request: NextRequest) {
  try {
    const docList = await db.select().from(documents).orderBy({ createdAt: { dir: 'desc' } });
    return NextResponse.json(docList);
  } catch (error) {
    console.error('Documents GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, description, fileUrl, externalLink, category, isActive = true } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const [newDoc] = await db.insert(documents).values({
      title,
      description,
      fileUrl,
      externalLink,
      category,
      isActive,
    }).returning();

    return NextResponse.json(newDoc, { status: 201 });
  } catch (error) {
    console.error('Documents POST error:', error);
    return NextResponse.json({ error: 'Failed to create document' }, { status: 500 });
  }
}