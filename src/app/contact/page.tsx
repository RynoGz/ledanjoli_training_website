export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-widest text-green-500 mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>

          <p className="max-w-3xl text-xl text-gray-300">
            Contact Le Danjoli to discuss training options,
            availability and the best program for your dog.
          </p>

        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>

              <h2 className="text-4xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-700">
                    +27 XX XXX XXXX
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-700">
                    example@email.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Location
                  </h3>

                  <p className="text-gray-700">
                    Pretoria, Gauteng
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Business Hours
                  </h3>

                  <p className="text-gray-700">
                    Monday - Saturday
                  </p>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h2 className="text-3xl font-bold mb-6">
                Send an Enquiry
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg p-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg p-3"
                />

                <textarea
                  placeholder="Tell us about your dog and training requirements..."
                  rows={6}
                  className="w-full border rounded-lg p-3"
                />

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}