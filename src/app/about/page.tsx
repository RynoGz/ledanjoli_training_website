import Image from "next/image";
export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-green-500 mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Le Danjoli
          </h1>

          <p className="max-w-3xl text-xl text-gray-300">
            Placeholder text describing the school, its mission,
            and its commitment to developing well-balanced,
            obedient and confident dogs.
          </p>
        </div>
      </section>

      {/* School Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Our Story
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            This section will contain information about how
            Le Danjoli was founded, the training philosophy,
            and the goals of the school.
          </p>

        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
  <Image
    src="/images/trainer.jpeg"
    alt="Trainer"
    width={350}
    height={500}
    priority
    className="rounded-xl shadow-lg object-cover"
  />
</div>

            <div>

              <h2 className="text-4xl font-bold mb-6">
                The Trainer
              </h2>

              <p className="text-lg text-gray-700 mb-4">
                Trainer biography placeholder.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Experience placeholder.
              </p>

              <p className="text-lg text-gray-700">
                Qualifications and achievements placeholder.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Training Philosophy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Placeholder text describing the methods,
            values and approach used during training.
          </p>

        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Client Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="mb-4">
                ⭐⭐⭐⭐⭐
              </p>

              <p>
                Review placeholder.
              </p>

              <p className="mt-4 font-semibold">
                - Client Name
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="mb-4">
                ⭐⭐⭐⭐⭐
              </p>

              <p>
                Review placeholder.
              </p>

              <p className="mt-4 font-semibold">
                - Client Name
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="mb-4">
                ⭐⭐⭐⭐⭐
              </p>

              <p>
                Review placeholder.
              </p>

              <p className="mt-4 font-semibold">
                - Client Name
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}