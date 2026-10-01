import { redirect } from 'next/navigation';
import { getMostRecentSunday } from '@/lib/meetings-db';

export default function CurrentMeetingPage() {
  const meeting = getMostRecentSunday();
  redirect(meeting ? `/meetings/${meeting.id}` : '/meetings');
}
