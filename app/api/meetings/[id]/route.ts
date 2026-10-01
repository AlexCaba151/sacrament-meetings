import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface RouteContext { params: Promise<{ id: string }> }

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;
  const numericId = Number(id);

  if (!Number.isInteger(numericId)) {
    return NextResponse.json({ error: 'Meeting id must be a number.' }, { status: 400 });
  }

  const meeting = getMeetingById(numericId);
  if (!meeting) {
    return NextResponse.json({ error: 'Meeting not found.' }, { status: 404 });
  }

  return NextResponse.json(meeting);
}
