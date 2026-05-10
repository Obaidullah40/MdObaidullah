import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[80vh] place-items-center px-6 text-center">
      <div>
        <p className="text-gradient font-display text-7xl font-extrabold">
          404
        </p>
        <h1 className="mt-3 font-display text-2xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-fg-muted)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Link href="/" className="btn btn-primary mt-6 text-sm">
          <ArrowLeft size={14} /> Back home
        </Link>
      </div>
    </main>
  );
}
