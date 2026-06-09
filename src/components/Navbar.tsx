import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          Le Danjoli
        </Link>

        <div className="flex gap-6 text-sm font-medium">

          <Link href="/">
            Home
          </Link>

          <Link href="/obedience">
            Obedience
          </Link>

          <Link href="/bite-work">
            Bite Work
          </Link>

          <Link href="/puppy-training">
            Puppy Training
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}