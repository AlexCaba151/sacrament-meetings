import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

const labels: Record<SacramentMeeting['meetingType'], string> = {
  testimony: 'Testimony Meeting',
  regular: 'Regular Sacrament Meeting',
  stake: 'Stake Meeting',
  general: 'General Meeting'
};

export default function MeetingCard({
  meeting
}: MeetingCardProps) {
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC'
  }).format(new Date(`${meeting.date}T00:00:00Z`));

  return (
    <article className="group border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1 bg-[#B08D57]" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
              {date}
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[#172033]">
              {labels[meeting.meetingType]}
            </h2>
          </div>

          <span className="border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
            #{meeting.id}
          </span>
        </div>

        <div className="my-6 h-px bg-slate-100" />

        <dl className="space-y-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="font-medium text-slate-500">
              Presiding
            </dt>

            <dd className="text-right font-medium text-[#172033]">
              {meeting.presiding}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="font-medium text-slate-500">
              Conducting
            </dt>

            <dd className="text-right font-medium text-[#172033]">
              {meeting.conducting}
            </dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="font-medium text-slate-500">
              Speakers
            </dt>

            <dd className="text-right font-medium text-[#172033]">
              {
                meeting.speakers.filter(
                  (item) => item.type === 'speaker'
                ).length
              }
            </dd>
          </div>
        </dl>

        <Link
          href={`/meetings/${meeting.id}`}
          className="mt-7 flex w-full items-center justify-center border border-[#172033] bg-[#172033] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#294C73] focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2"
        >
          View Program
        </Link>
      </div>
    </article>
  );
}