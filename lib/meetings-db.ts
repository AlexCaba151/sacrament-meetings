import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-09-27',
    meetingType: 'regular',
    presiding: 'Bishop Daniel Rivera',
    conducting: 'Brother Michael Santos',
    announcements: [
      'Youth temple preparation class will meet Tuesday at 7:00 PM.',
      'Relief Society service activity will be held Saturday morning.'
    ],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Maria Garcia',
    wardBusiness: [
      { description: 'Sustain newly called Primary teachers.' },
      { description: 'Share information about the upcoming ward activity.' }
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'Elder Luis Martinez', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Sister Ana Torres', topic: 'I Know That My Redeemer Lives', type: 'musical-number' },
      { name: 'Sister Sofia Hernandez', topic: 'Finding Peace Through the Gospel', type: 'speaker' }
    ],
    closingHymn: { number: 223, title: 'Have I Done Any Good?' },
    closingPrayer: 'Brother Carlos Diaz'
  },
  {
    id: 2,
    date: '2026-09-20',
    meetingType: 'testimony',
    presiding: 'Bishop Daniel Rivera',
    conducting: 'Sister Elena Cruz',
    announcements: ['Fast Sunday donations may be submitted after the meeting.'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Brother Jose Ramirez',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Sister Laura Perez'
  },
  {
    id: 3,
    date: '2026-09-13',
    meetingType: 'regular',
    presiding: 'President Samuel Ortiz',
    conducting: 'Brother Michael Santos',
    announcements: ['Ward choir rehearsal will be Wednesday at 6:30 PM.'],
    openingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    openingPrayer: 'Sister Rosa Jimenez',
    wardBusiness: [{ description: 'Sustain the new ward clerk.' }],
    stakeBusiness: true,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'Brother Andres Molina', topic: 'Covenants and Discipleship', type: 'speaker' },
      { name: 'Ward Choir', topic: 'Come, Come, Ye Saints', type: 'musical-number' }
    ],
    closingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    closingPrayer: 'Brother Pedro Castillo'
  },
  {
    id: 4,
    date: '2026-09-06',
    meetingType: 'stake',
    presiding: 'President James Wilson',
    conducting: 'Brother Robert Young',
    announcements: ['Stake conference assignments will be shared this week.'],
    openingHymn: { number: 89, title: 'The Lord Is My Light' },
    openingPrayer: 'Sister Grace Lee',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'President James Wilson', topic: 'Serving the Savior', type: 'speaker' },
      { name: 'Sister Grace Lee', topic: 'Where Can I Turn for Peace?', type: 'musical-number' }
    ],
    closingHymn: { number: 220, title: 'Lord, I Would Follow Thee' },
    closingPrayer: 'Brother Robert Young'
  },
  {
    id: 5,
    date: '2026-08-30',
    meetingType: 'regular',
    presiding: 'Bishop Daniel Rivera',
    conducting: 'Sister Elena Cruz',
    announcements: ['Primary program preparation begins next Sunday.'],
    openingHymn: { number: 94, title: 'Come, Ye Thankful People' },
    openingPrayer: 'Sister Maria Garcia',
    wardBusiness: [{ description: 'Review upcoming service opportunities.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 187, title: 'God Loved Us, So He Sent His Son' },
    speakers: [
      { name: 'Sister Camila Reyes', topic: 'Serving Others', type: 'speaker' },
      { name: 'Brother David Lopez', topic: 'The Lord Is My Shepherd', type: 'musical-number' }
    ],
    closingHymn: { number: 221, title: 'Dear to the Heart of the Shepherd' },
    closingPrayer: 'Brother Carlos Diaz'
  }
];

export function getMeetings(date?: string): SacramentMeeting[] {
  if (!date) return meetings;
  return meetings.filter((meeting) => meeting.date === date);
}

export function getMeetingById(id: number): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}

export function getMostRecentSunday(): SacramentMeeting | undefined {
  const sorted = [...meetings].sort((a, b) => b.date.localeCompare(a.date));
  const today = new Date();
  const day = today.getDay();
  const mostRecentSunday = new Date(today);
  mostRecentSunday.setDate(today.getDate() - day);
  const sundayString = mostRecentSunday.toISOString().slice(0, 10);

  return sorted.find((meeting) => meeting.date <= sundayString) ?? sorted[0];
}
