import Link from "next/link";

const trainingLinks = [
  { href: "/obedience", label: "Obedience training" },
  { href: "/puppy-training", label: "Puppy training" },
  { href: "/bite-work", label: "Manwork & protection" },
];

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Enquire" },
];

const footerLinkClass =
  "w-fit border-b border-transparent pb-0.5 text-[var(--bone)] transition-colors hover:border-[var(--red)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)]";

export default function Footer() {
  return (
    <footer className="border-t-[6px] border-[var(--red)] bg-[var(--coal)] text-[var(--bone)] [font-family:var(--font-body)]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid border-x border-[color:rgb(242_237_226_/_0.22)] lg:grid-cols-[1.35fr_0.85fr_0.8fr]">
          <div className="px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--dry)] [font-family:var(--font-mono)]">
              Le Danjoli  Dog training
            </p>
            <p className="mt-5 max-w-lg text-5xl font-black uppercase leading-[0.9] tracking-[-0.025em] sm:text-6xl [font-family:var(--font-display)]">
              Train with
              <br />
              clear purpose.
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-[color:rgb(242_237_226_/_0.68)]">
              Structured training for everyday obedience, early development and suitable working dogs.
            </p>
          </div>

          <nav
            aria-label="Training programmes"
            className="border-t border-[color:rgb(242_237_226_/_0.22)] px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-16"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--dry)] [font-family:var(--font-mono)]">
              Training
            </p>
            <ul className="mt-6 space-y-4 text-base font-semibold">
              {trainingLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-[color:rgb(242_237_226_/_0.22)] px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-16">
            <nav aria-label="Footer navigation">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--dry)] [font-family:var(--font-mono)]">
                Site
              </p>
              <ul className="mt-6 space-y-4 text-base font-semibold">
                {siteLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={footerLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>

        <div className="flex flex-col gap-2 border-x border-t border-[color:rgb(242_237_226_/_0.22)] px-5 py-5 text-[0.65rem] uppercase tracking-[0.14em] text-[color:rgb(242_237_226_/_0.5)] [font-family:var(--font-mono)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} Le Danjoli Dog Training</p>
        </div>
      </div>
    </footer>
  );
}
