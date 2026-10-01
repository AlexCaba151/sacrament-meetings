import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

const meetingTypeLabels: Record<
  SacramentMeeting['meetingType'],
  string
> = {
  testimony: 'Testimony Meeting',
  regular: 'Sacrament Meeting',
  stake: 'Stake Meeting',
  general: 'General Meeting'
};

export default function MeetingDetail({
  meeting
}: MeetingDetailProps) {
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: 'UTC'
  }).format(new Date(`${meeting.date}T00:00:00Z`));

  const speakers = meeting.speakers.filter(
    (item) => item.type === 'speaker'
  );

  const musicalNumbers = meeting.speakers.filter(
    (item) => item.type === 'musical-number'
  );

  return (
    <article className="meeting-program mx-auto max-w-4xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(23,32,51,0.08)]">
      
      {/* Header */}
      <div className="border-b-4 border-[#B08D57] bg-[#172033] px-6 py-10 text-center text-white sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B77A]">
          The Church of Jesus Christ of Latter-day Saints
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Santo Domingo Ward
        </h1>

        <p className="mt-3 text-sm text-slate-300">
          {meetingTypeLabels[meeting.meetingType]}
        </p>

        <div className="mx-auto mt-6 h-px w-16 bg-[#B08D57]" />

        <p className="mt-6 text-sm font-medium text-slate-200">
          {date}
        </p>
      </div>

      {/* Meeting Officers */}
      <div className="grid border-b border-slate-200 sm:grid-cols-2">
        <div className="border-b border-slate-200 px-6 py-5 sm:border-b-0 sm:border-r">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            Presiding
          </p>

          <p className="mt-2 font-semibold text-[#172033]">
            {meeting.presiding}
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
            Conducting
          </p>

          <p className="mt-2 font-semibold text-[#172033]">
            {meeting.conducting}
          </p>
        </div>
      </div>

      <div className="space-y-10 px-6 py-10 sm:px-12">
        
        {/* Announcements */}
        {meeting.announcements &&
          meeting.announcements.length > 0 && (
            <section>
              <SectionTitle title="Announcements" />

              <ul className="mt-5 space-y-3">
                {meeting.announcements.map(
                  (announcement, index) => (
                    <li
                      key={`${announcement}-${index}`}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08D57]" />

                      <span>{announcement}</span>
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

        {/* Opening */}
        <section>
          <SectionTitle title="Opening" />

          <div className="mt-5 divide-y divide-slate-100 border-y border-slate-100">
            <ProgramRow
              label="Opening Hymn"
              value={`#${meeting.openingHymn.number} — ${meeting.openingHymn.title}`}
            />

            <ProgramRow
              label="Opening Prayer"
              value={meeting.openingPrayer}
            />
          </div>
        </section>

        {/* Ward Business */}
        <section>
          <SectionTitle title="Ward Business" />

          <div className="mt-5">
            {meeting.wardBusiness.length > 0 ? (
              <ul className="space-y-3">
                {meeting.wardBusiness.map(
                  (item, index) => (
                    <li
                      key={`${item.description}-${index}`}
                      className="border-l-2 border-[#B08D57] pl-4 text-sm leading-6 text-slate-600"
                    >
                      {item.description}
                    </li>
                  )
                )}
              </ul>
            ) : (
              <p className="text-sm italic text-slate-400">
                No ward business scheduled.
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm font-medium text-slate-500">
              Stake Business
            </span>

            <span
              className={`text-sm font-semibold ${
                meeting.stakeBusiness
                  ? 'text-[#294C73]'
                  : 'text-slate-400'
              }`}
            >
              {meeting.stakeBusiness ? 'Yes' : 'No'}
            </span>
          </div>
        </section>

        {/* Sacrament */}
        <section>
          <SectionTitle title="Administration of the Sacrament" />

          <div className="mt-5">
            <ProgramRow
              label="Sacrament Hymn"
              value={`#${meeting.sacramentHymn.number} — ${meeting.sacramentHymn.title}`}
            />
          </div>
        </section>

        {/* Speakers */}
        <section>
          <SectionTitle title="Messages" />

          <div className="mt-5 space-y-5">
            {speakers.length > 0 ? (
              speakers.map((speaker, index) => (
                <div
                  key={`${speaker.name}-${index}`}
                  className="border border-slate-200 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                    Speaker
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#172033]">
                    {speaker.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {speaker.topic}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm italic text-slate-400">
                No speakers scheduled.
              </p>
            )}
          </div>
        </section>

        {/* Musical Numbers */}
        {musicalNumbers.length > 0 && (
          <section>
            <SectionTitle title="Musical Numbers" />

            <div className="mt-5 space-y-4">
              {musicalNumbers.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex flex-col justify-between gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-medium text-[#172033]">
                      {item.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {item.topic}
                    </p>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
                    Musical Number
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing */}
        <section>
          <SectionTitle title="Closing" />

          <div className="mt-5 divide-y divide-slate-100 border-y border-slate-100">
            <ProgramRow
              label="Closing Hymn"
              value={`#${meeting.closingHymn.number} — ${meeting.closingHymn.title}`}
            />

            <ProgramRow
              label="Closing Prayer"
              value={meeting.closingPrayer}
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 text-center sm:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Sacrament Meeting Program
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Santo Domingo Ward
        </p>
      </div>
    </article>
  );
}

function SectionTitle({
  title
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-200" />

      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#294C73]">
        {title}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

function ProgramRow({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#B08D57]">
        {label}
      </span>

      <span className="text-sm font-medium text-[#172033] sm:text-right">
        {value}
      </span>
    </div>
  );
}