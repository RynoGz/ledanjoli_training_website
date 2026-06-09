import Link from "next/link";

export default function ObediencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-green-500 mb-4">
            Obedience Training
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build a Well-Mannered Dog
          </h1>

          <p className="max-w-3xl text-xl text-gray-300">
            Placeholder text describing the obedience training program.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            What Is Obedience Training?
          </h2>

          <p className="text-lg text-gray-700">
            Placeholder text.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Skills Your Dog Will Learn
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ Sit</li>
            <li>✔ Stay</li>
            <li>✔ Down</li>
            <li>✔ Recall</li>
            <li>✔ Loose-Leash Walking</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="mb-8">
            Contact us to discuss your dog training needs.
          </p>

          <Link
            href="/contact"
            className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </Link>

        </div>
      </section>
    </main>
  );
}