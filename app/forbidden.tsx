import Link from "next/link";

export default function Forbidden() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">403 - Forbidden</h1>
      <p className="mb-6">You do not have permission to access this page.</p>
      <Link
        href="/"
        className="rounded border border-gray-700 px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        Return Home
      </Link>
    </div>
  );
}

// TODO: invoke forbidden() to redirect the user to this page
