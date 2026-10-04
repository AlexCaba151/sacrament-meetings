import MeetingCard from '@/components/MeetingCard';
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import {
  getMeetings,
  getMeetingsTotalPages,
} from '@/lib/meetings-db';

interface MeetingsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function MeetingsPage({
  searchParams,
}: MeetingsPageProps) {
  const params = await searchParams;

  const query = params.query || '';
  const currentPage = Number(params.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Sacrament Meetings
      </h1>

      <MeetingSearch />

      {meetings.length === 0 ? (
        <p>No meetings found.</p>
      ) : (
        <div className="grid gap-4">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      )}

      <Pagination totalPages={totalPages} />
    </main>
  );
}