import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Enquiry",
  description:
    "Tell Le Danjoli about your dog, your training goals and the support you are looking for.",
};

const enquiryNotes = [
  "Your dog's age and breed",
  "What you would like help with",
  "Any training you have done so far",
  "The best way to get back to you",
];

const fieldClassName =
  "mt-3 w-full border border-[var(--coal)]/40 bg-transparent px-4 py-3.5 font-normal text-[var(--coal)] outline-none transition placeholder:text-[var(--coal)]/50 focus:border-[var(--red)] focus:ring-2 focus:ring-[var(--red)]/20";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--bone)]/15 bg-[var(--coal)] px-5 pt-12 text-[var(--bone)] sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-b border-[var(--bone)]/25 pb-4 font-[family-name:var(--font-mono)] text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--dry)]">
            <span>Training enquiry</span>
          </div>

          <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:py-24">
            <h1 className="page-enter max-w-4xl text-balance font-[family-name:var(--font-display)] text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.045em] text-[var(--bone)]">
              Tell us about your dog
            </h1>
            <div className="border-l-4 border-[var(--red)] pl-5">
              <p className="text-base leading-7 text-[var(--bone)]/70 sm:text-lg">
                Share where you are now and what you would like to work on. A
                little context helps us understand a useful place to begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--field)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--dry)]">
              Preparation notes
            </p>
            <h2 className="mt-4 max-w-sm font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-[-0.015em] text-[var(--bone)]">
              What to include in your enquiry.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--bone)]/70">
              You do not need to have everything figured out. These details
              simply give the conversation a practical starting point.
            </p>

            <ol className="mt-9 border-t border-[var(--bone)]/60">
              {enquiryNotes.map((note, index) => (
                <li
                  key={note}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[var(--bone)]/25 py-4 text-sm leading-6 text-[var(--bone)]/80"
                >
                  <span className="font-[family-name:var(--font-mono)] text-[0.65rem] font-bold tracking-[0.14em] text-[var(--dry)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          </aside>

          <div className="border border-[var(--coal)] bg-[var(--bone)]">
            <div className="flex flex-col gap-5 border-b border-[var(--coal)] bg-[var(--coal)] px-5 py-6 text-[var(--bone)] sm:flex-row sm:items-end sm:justify-between sm:px-7">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--dry)]">
                  Training enquiry
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-[-0.01em] sm:text-3xl">
                  Your details and training goals
                </h2>
              </div>
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--bone)]/55">
                Complete what you can
              </p>
            </div>

            <form>
              <div className="grid sm:grid-cols-2">
                <label className="border-b border-[var(--coal)]/35 p-5 text-sm font-bold text-[var(--coal)] sm:border-r sm:p-6">
                  
                  <span className="mt-2 block">Full name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClassName}
                  />
                </label>

                <label className="border-b border-[var(--coal)]/35 p-5 text-sm font-bold text-[var(--coal)] sm:p-6">
                  
                  <span className="mt-2 block">Email address</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClassName}
                  />
                </label>

                <label className="border-b border-[var(--coal)]/35 p-5 text-sm font-bold text-[var(--coal)] sm:border-r sm:p-6">
                  
                  <span className="mt-2 block">Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className={fieldClassName}
                  />
                </label>

                <label className="border-b border-[var(--coal)]/35 p-5 text-sm font-bold text-[var(--coal)] sm:p-6">
                  
                  <span className="mt-2 block">Training interest</span>
                  <select
                    name="training"
                    defaultValue=""
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select a programme
                    </option>
                    <option>Obedience training</option>
                    <option>Puppy training</option>
                    <option>Protection training</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="block border-b border-[var(--coal)] p-5 text-sm font-bold text-[var(--coal)] sm:p-7">
                
                <span className="mt-2 block">Your message</span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us about your dog and what you would like to achieve..."
                  className={`${fieldClassName} resize-y`}
                />
              </label>

              <div className="flex flex-col gap-5 bg-[var(--dry)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <p className="max-w-md text-xs leading-5 text-[var(--coal)]/70">
                  Review the details above, then continue when you are ready.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-between gap-8 border border-[var(--red)] bg-[var(--red)] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[var(--bone)] transition-colors hover:border-[var(--coal)] hover:bg-[var(--coal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coal)]"
                >
                  Send enquiry
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
