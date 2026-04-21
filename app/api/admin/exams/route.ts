import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { exams } from '@/lib/db/schema';
import { verifyToken } from '@/lib/db/auth';

function getAuthUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '') 
    || request.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(request: NextRequest) {
  try {
    const examList = await db.select().from(exams).orderBy({ createdAt: { dir: 'desc' } });
    return NextResponse.json(examList);
  } catch (error) {
    console.error('Exams GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch exams' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, description, link, isActive = true } = body;

    if (!title || !link) {
      return NextResponse.json({ error: 'Title and link are required' }, { status: 400 });
    }

    const [newExam] = await db.insert(exams).values({
      title,
      description,
      link,
      isActive,
    }).returning();

    return NextResponse.json(newExam, { status: 201 });
  } catch (error) {
    console.error('Exams POST error:', error);
    return NextResponse.json({ error: 'Failed to create exam' }, { status: 500 });
  }
}