import Link from "next/link";

export default function ProtectionTrainingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-green-500 mb-4">
            Protection Training
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Advanced Working Dog Development
          </h1>

          <p className="max-w-3xl text-xl text-gray-300">
            Placeholder information about protection and bite work training.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            What Is Protection Training?
          </h2>

          <p className="text-lg text-gray-700">
            Placeholder text describing the purpose of protection training.
          </p>

        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Requirements
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ Stable Temperament</li>
            <li>✔ Solid Obedience Foundation</li>
            <li>✔ Good Health</li>
            <li>✔ Appropriate Drive Levels</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Interested In Protection Training?
        </h2>

        <p className="mb-8">
          Contact us to discuss whether your dog is suitable.
        </p>

        <Link
          href="/contact"
          className="bg-green-700 hover:bg-green-800 px-6 py-3 rounded-lg font-semibold"
        >
          Contact Us
        </Link>

      </section>
    </main>
  );
}