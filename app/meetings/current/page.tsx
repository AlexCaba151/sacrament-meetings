import { redirect } from 'next/navigation';
import { getMostRecentSunday } from '@/lib/meetings-db';

export default async function CurrentMeetingPage() {
  const meeting = await getMostRecentSunday();

  if (!meeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meeting.id}`);
}