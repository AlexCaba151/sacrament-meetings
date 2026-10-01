'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center bg-[#172033] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#294C73] focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2"
    >
      Print Meeting Program
    </button>
  );
}