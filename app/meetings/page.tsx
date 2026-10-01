import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';

async function getMeetings(): Promise<SacramentMeeting[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3000';

  const response = await fetch(
    `${baseUrl}/api/meetings`,
    {
      cache: 'no-store'
    }
  );

  if (!response.ok) {
    throw new Error('Unable to load meetings.');
  }

  return response.json() as Promise<SacramentMeeting[]>;
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
          Meeting Programs
        </p>

        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
              All Meetings
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600">
              Review current and previous sacrament meeting
              programs, including speakers, hymns, prayers,
              and ward business.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            <span className="font-semibold text-[#172033]">
              {meetings.length}
            </span>{' '}
            meeting programs
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </div>
  );
}