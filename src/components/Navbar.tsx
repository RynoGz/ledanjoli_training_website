"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/obedience", label: "Obedience" },
  { href: "/puppy-training", label: "Puppy training" },
  { href: "/bite-work", label: "Manwork / protection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Enquire" },
];

function isCurrentRoute(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--coal)] bg-[var(--bone)] text-[var(--coal)] [font-family:var(--font-body)]">
      <div aria-hidden="true" className="h-1 bg-[var(--red)]" />

      <nav
        aria-label="Primary navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setIsOpen(false);
          }
        }}
      >
        <div className="mx-auto flex min-h-20 max-w-[90rem] items-stretch px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-[var(--coal)] bg-[var(--red)] text-lg font-black uppercase leading-none tracking-[-0.04em] text-[var(--bone)] transition-colors group-hover:bg-[var(--coal)] [font-family:var(--font-display)]">
              LD
            </span>
            <span className="leading-none">
              <span className="block text-2xl font-black uppercase tracking-[0.035em] [font-family:var(--font-display)] sm:text-[1.75rem]">
                Le Danjoli
              </span>
              <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--field)] [font-family:var(--font-mono)]">
                Dog training
              </span>
            </span>
          </Link>

          <ul className="ml-auto hidden items-stretch border-r border-[color:rgb(23_26_23_/_0.24)] lg:flex">
            {navigation.map((item) => {
              const isCurrent = isCurrentRoute(pathname, item.href);

              return (
                <li
                  key={item.href}
                  className="flex border-l border-[color:rgb(23_26_23_/_0.24)]"
                >
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`relative flex items-center px-3 text-xs font-bold uppercase tracking-[0.08em] transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:origin-left after:bg-[var(--red)] after:transition-transform hover:text-[var(--red)] focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-[var(--red)] xl:px-4 xl:text-sm ${
                      isCurrent
                        ? "text-[var(--coal)] after:scale-x-100"
                        : "text-[var(--field)] after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="ml-auto grid h-12 w-12 place-items-center self-center border-2 border-[var(--coal)] text-[var(--coal)] transition-colors hover:bg-[var(--coal)] hover:text-[var(--bone)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)] lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t-2 border-[var(--coal)] bg-[var(--bone)] lg:hidden"
          >
            <ul className="mx-auto max-w-[90rem] border-x border-[color:rgb(23_26_23_/_0.24)] px-4 sm:mx-6 sm:px-0">
              {navigation.map((item, index) => {
                const isCurrent = isCurrentRoute(pathname, item.href);

                return (
                  <li
                    key={item.href}
                    className={index === 0 ? "" : "border-t border-[color:rgb(23_26_23_/_0.24)]"}
                  >
                    <Link
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex min-h-14 items-center justify-between px-4 text-base font-bold uppercase tracking-[0.08em] after:absolute after:bottom-0 after:left-4 after:h-[3px] after:w-12 after:bg-[var(--red)] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--red)] ${
                        isCurrent
                          ? "text-[var(--coal)] after:scale-x-100"
                          : "text-[var(--field)] after:scale-x-0"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-[var(--red)] [font-family:var(--font-mono)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
