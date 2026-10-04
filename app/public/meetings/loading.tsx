export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="mb-6 h-8 w-64 rounded bg-gray-200" />

        <div className="mb-6 h-10 rounded bg-gray-200" />

        <div className="space-y-4">
          <div className="h-32 rounded bg-gray-200" />
          <div className="h-32 rounded bg-gray-200" />
          <div className="h-32 rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
}