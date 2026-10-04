import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <NavLinks />
        </div>
      </nav>

      {children}
    </div>
  );
}