import Link from 'next/link';
import MeetingDetail from '@/components/MeetingDetail';
import PrintButton from '@/components/PrintButton';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(
  id: string
): Promise<SacramentMeeting> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3000';

  const response = await fetch(
    `${baseUrl}/api/meetings/${id}`,
    {
      cache: 'no-store'
    }
  );

  if (!response.ok) {
    throw new Error('Meeting not found.');
  }

  return response.json() as Promise<SacramentMeeting>;
}

export default async function MeetingPage({
  params
}: MeetingPageProps) {
  const { id } = await params;

  const meeting = await getMeeting(id);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="print:hidden mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/meetings"
          className="text-sm font-semibold text-[#294C73] transition hover:text-[#172033]"
        >
          ← Back to Meetings
        </Link>

        <PrintButton />
      </div>

      <MeetingDetail meeting={meeting} />
    </div>
  );
}