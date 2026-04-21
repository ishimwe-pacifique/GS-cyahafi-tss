import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { announcements } from '@/lib/db/schema';
import { verifyToken } from '@/lib/db/auth';

function getAuthUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '') 
    || request.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(request: NextRequest) {
  try {
    const announcementList = await db.select().from(announcements).orderBy({ createdAt: { dir: 'desc' } });
    return NextResponse.json(announcementList);
  } catch (error) {
    console.error('Announcements GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch announcements' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const user = getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, isActive = true } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const [newAnnouncement] = await db.insert(announcements).values({
      title,
      content,
      isActive,
    }).returning();

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
    console.error('Announcements POST error:', error);
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 });
  }
}