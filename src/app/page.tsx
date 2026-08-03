import SectionHeading from "@/components/SectionHeading";
import TrainingCard from "@/components/TrainingCard";
import Image from "next/image";
import Link from "next/link";

const programmes = [
  {
    number: "01",
    title: "Obedience",
    descriptor: "Everyday control / higher standards",
    description:
      "From dependable everyday handling to certification and show preparation, with individual support for difficult behaviour.",
    image: "/images/obedience.jpeg",
    imageAlt: "German Shepherds holding an obedience exercise on a training field",
    href: "/obedience",
  },
  {
    number: "02",
    title: "Puppy foundations",
    descriptor: "Early guidance / confident starts",
    description:
      "Age-appropriate guidance for calm attention, recall, social experiences and repeatable routines at home.",
    image: "/images/puppy.jpeg",
    imageAlt: "A young dog focused on a handler during a training session",
    href: "/puppy-training",
  },
  {
    number: "03",
    title: "Manwork & protection",
    descriptor: "Suitability / control / responsible work",
    description:
      "Structured development for suitable dogs, from competition and certification work to controlled personal protection.",
    image: "/images/protection.jpeg",
    imageAlt: "A dog and decoy in a controlled protection training exercise",
    href: "/bite-work",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    text: "Begin with the dog, their history and the outcome you are working toward.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Set a clear direction that matches the dog, the handler and real life.",
  },
  {
    number: "03",
    title: "Practise",
    text: "Build repeatable skills through calm, consistent work and honest progress.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-[#171a17] bg-[#f2ede2]">
        <div className="page-wrap grid min-h-[calc(100svh-81px)] lg:grid-cols-12">
          <div className="flex flex-col justify-between border-[#171a17] py-12 lg:col-span-7 lg:border-r lg:py-16 lg:pr-12 xl:pr-20">
            <div>
              <p className="section-label page-enter text-[#b13c2e]">
                Le Danjoli  Dog training
              </p>
              <h1 className="display-type page-enter mt-9 max-w-4xl text-[clamp(4.5rem,9vw,9.6rem)] uppercase leading-[0.78] text-[#171a17]">
                Train the dog
                <span className="block text-[#b13c2e]">in front of you.</span>
              </h1>
              <p className="page-enter-delay mt-9 max-w-xl text-lg leading-8 text-[#4f504b] sm:text-xl">
                Purposeful obedience, puppy development, manwork and protection
                training shaped around the dog.
              </p>
              <div className="page-enter-delay mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                
                <Link
                  href="#programmes"
                  className="border-b border-[#171a17] pb-1 text-sm font-semibold hover:border-[#b13c2e] hover:text-[#b13c2e]"
                >
                  Explore the training
                </Link>
              </div>
            </div>

          </div>

          <figure className="image-reveal -mx-[var(--page-gutter)] border-[#171a17] bg-[#171a17] lg:col-span-5 lg:mx-0 lg:ml-10 lg:border-l lg:border-r">
            <div className="relative min-h-[32rem] h-[72svh] max-h-[52rem] overflow-hidden lg:h-[calc(100%-74px)] lg:min-h-[38rem]">
              <Image
                src="/images/hero.jpeg"
                alt="Handlers and German Shepherds together on the Le Danjoli training field"
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="field-photo object-cover object-[54%_center]"
              />
            </div>
            <figcaption className="flex h-[74px] items-center justify-between border-t border-[#f2ede2]/30 px-5 text-[#f2ede2]">
              
              <span className="display-type text-2xl" aria-hidden="true">
                LD
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-[#f2ede2]/25 bg-[#171a17] text-[#f2ede2]">
        <div className="page-wrap grid divide-y divide-[#f2ede2]/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            "Obedience & behaviour",
            "Puppy foundations",
            "Manwork & protection",
          ].map((item, index) => (
            <p
              key={item}
              className="meta-type flex items-center gap-4 py-4 text-[0.65rem] font-medium uppercase tracking-[0.13em] sm:px-5 first:pl-0"
            >
              <span className="text-[#d45a49]">0{index + 1}</span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="programmes" className="bg-[#faf7f0] py-20 lg:py-28">
        <div className="page-wrap">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionHeading
              title="Different goals. One clear standard of work."
            />
          </div>
          <div>
            {programmes.map((programme) => (
              <TrainingCard key={programme.number} {...programme} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2ede2] py-20 lg:py-28">
        <div className="page-wrap">
          <SectionHeading
            title="A practical way forward."
          />
          <div className="grid border-y border-[#171a17] md:grid-cols-3 md:divide-x md:divide-[#171a17]">
            {process.map((step) => (
              <article
                key={step.number}
                className="border-b border-[#171a17] py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 lg:py-10"
              >
                <p className="meta-type text-xs font-semibold tracking-[0.12em] text-[#b13c2e]">
                  {step.number}
                </p>
                <h3 className="display-type mt-8 text-4xl uppercase leading-none">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm leading-7 text-[#68685f]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
