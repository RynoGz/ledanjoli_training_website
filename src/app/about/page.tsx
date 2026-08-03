import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Le Danjoli's clear, consistent and individual approach to dog training.",
};

const principles = [
  {
    number: "01",
    label: "Observe",
    title: "Start with the dog",
    text: "Every programme begins with the dog in front of us: their needs, their potential and the everyday situations that matter.",
  },
  {
    number: "02",
    label: "Clarify",
    title: "Keep the work clear",
    text: "Useful training gives dog and owner practical direction they can understand, repeat and build on.",
  },
  {
    number: "03",
    label: "Apply",
    title: "Build for real life",
    text: "The most meaningful skills are the ones that hold beyond the training space and support life together.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--bone)]/15 bg-[var(--coal)] text-[var(--bone)]">
        <div className="mx-auto grid max-w-[1440px] lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
            <div className="flex items-center justify-between border-b border-[var(--bone)]/20 pb-4 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--bone)]/55">
              <span>About Le Danjoli</span>
            </div>

            <div className="py-16 lg:py-24">
              <p className="page-enter text-xs font-bold uppercase tracking-[0.24em] text-[var(--dry)]">
                The working philosophy
              </p>
              <h1 className="page-enter-delay mt-6 max-w-4xl text-balance font-[family-name:var(--font-display)] text-[clamp(3.2rem,7vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.045em]">
                Training is a relationship, not a quick fix
              </h1>
            </div>

            <div className="grid gap-6 border-t border-[var(--bone)]/20 pt-6 sm:grid-cols-[1fr_2fr]">
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[var(--dry)]">
                Purpose
              </p>
              <p className="max-w-xl text-base leading-7 text-[var(--bone)]/70 sm:text-lg">
                Clear training, confident dogs and progress that carries into
                everyday life.
              </p>
            </div>
          </div>

          <figure className="image-reveal image-wrap relative min-h-[520px] border-t border-[var(--bone)]/15 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/trainer.jpeg"
              alt="Trainer working with a dog at Le Danjoli"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="field-photo object-cover object-center"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-[var(--coal)] bg-[var(--bone)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
              Approach
            </p>
            <div className="mt-5 h-px w-16 bg-[var(--red)]" />
          </div>

          <div>
            <h2 className="max-w-4xl text-balance font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-[0.98] tracking-[-0.025em] text-[var(--coal)] sm:text-5xl lg:text-6xl">
              The dog in front of us sets the starting point.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-[var(--coal)]/25 pt-8 text-base leading-8 text-[var(--field)] sm:grid-cols-2 sm:text-lg">
              <p>
                Le Danjoli is built around the belief that training works best
                when it is clear, consistent and suited to the individual dog.
              </p>
              <p>
                Whether the goal is a more enjoyable companion, a confident
                puppy or focused working-dog development, the process starts by
                understanding where dog and owner are today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bone)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 border-b border-[var(--coal)] pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              
              <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-[-0.025em] text-[var(--coal)] sm:text-5xl">
                A clear measure of progress.
              </h2>
            </div>
            
          </div>

          <div>
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 border-b border-[var(--coal)]/30 py-8 sm:grid-cols-[5rem_0.7fr_1.2fr] sm:gap-8 sm:py-10 lg:grid-cols-[7rem_0.8fr_1.2fr]"
              >
                <div className="font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.18em] text-[var(--red)]">
                  {principle.number} / {principle.label}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-[-0.015em] text-[var(--coal)] sm:text-3xl">
                  {principle.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-[var(--field)] sm:text-lg sm:leading-8">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--coal)] bg-[var(--dry)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
              Next step / Enquiry
            </p>
            <h2 className="mt-5 max-w-3xl text-balance font-[family-name:var(--font-display)] text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] text-[var(--coal)] sm:text-5xl">
              Tell us where you and your dog are today.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-8 border border-[var(--red)] bg-[var(--red)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--bone)] transition-colors hover:border-[var(--coal)] hover:bg-[var(--coal)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--coal)]"
          >
            Start an enquiry
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
