import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-green-500 mb-4">
            Professional Dog Training
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Le Danjoli
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Professional dog training for family pets, working dogs,
            obedience training, puppy development and protection training.
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>

            <Link
              href="/about"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Training Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Link href="/obedience">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Obedience Training
                </h3>

                <p>
                  Placeholder information about obedience training.
                </p>
              </div>
            </Link>

            <Link href="/puppy-training">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Puppy Training
                </h3>

                <p>
                  Placeholder information about puppy training.
                </p>
              </div>
            </Link>

            <Link href="/bite-work">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Protection Training
                </h3>

                <p>
                  Placeholder information about protection and bite work training.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}