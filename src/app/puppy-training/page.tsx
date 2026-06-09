import Link from "next/link";

export default function PuppyTrainingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-green-500 mb-4">
            Puppy Training
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Give Your Puppy The Best Start
          </h1>

          <p className="max-w-3xl text-xl text-gray-300">
            Placeholder text describing puppy development and early training.
          </p>
        </div>
      </section>

      {/* Socialisation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Early Socialisation
          </h2>

          <p className="text-lg text-gray-700">
            Placeholder information about socialisation and confidence building.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Skills Your Puppy Will Learn
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✔ Name Recognition</li>
            <li>✔ Recall</li>
            <li>✔ Basic Obedience</li>
            <li>✔ Social Skills</li>
            <li>✔ Confidence Building</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start Training Early
        </h2>

        <p className="mb-8">
          Give your puppy the best possible foundation.
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