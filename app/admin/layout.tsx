export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="border-b bg-gray-100 px-4 py-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">
            Admin Area
          </h1>
        </div>
      </div>

      {children}
    </main>
  );
}