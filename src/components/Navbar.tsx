import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          Le Danjoli
        </Link>

        <div className="flex gap-6 text-sm font-medium">

          <Link href="/"
          className="hover:text-green-400 transition">
            Home
          </Link>

          <Link href="/obedience"
          className="hover:text-green-400 transition">
            Obedience
          </Link>

          <Link href="/bite-work"
          className="hover:text-green-400 transition">
            Bite Work
          </Link>

          <Link href="/puppy-training"
          className="hover:text-green-400 transition">
            Puppy Training
          </Link>

          <Link href="/about"
          className="hover:text-green-400 transition">
            About
          </Link>

          <Link href="/contact"
          className="hover:text-green-400 transition">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}