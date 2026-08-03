import Image from "next/image";
import Link from "next/link";

type ProgramTone = "obedience" | "puppy" | "protection";

interface ProgramPageProps {
  programmeNumber: string;
  tone: ProgramTone;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  overviewTitle: string;
  overview: string;
  focusTitle: string;
  focusItems: string[];
  pathways?: Array<{
    title: string;
    description: string;
  }>;
  closingTitle: string;
  closingText: string;
}

const toneStyles: Record<
  ProgramTone,
  {
    hero: string;
    heroRule: string;
    heroMuted: string;
    accentText: string;
    accentBackground: string;
    accentInk: string;
    accentHover: string;
    focusRule: string;
    pathways: string;
    pathwayRule: string;
    pathwayMuted: string;
  }
> = {
  obedience: {
    hero: "bg-[var(--field)] text-[var(--bone)]",
    heroRule: "border-white/20",
    heroMuted: "text-white/70",
    accentText: "text-[var(--bone)]",
    accentBackground: "bg-[var(--bone)]",
    accentInk: "text-[var(--field)]",
    accentHover: "hover:bg-[var(--coal)] hover:text-[var(--bone)]",
    focusRule: "border-[var(--field)]/45",
    pathways: "bg-[var(--bone)] text-[var(--coal)]",
    pathwayRule: "border-[var(--field)]",
    pathwayMuted: "text-[var(--field)]",
  },
  puppy: {
    hero: "bg-[var(--bone)] text-[var(--coal)]",
    heroRule: "border-black/20",
    heroMuted: "text-black/65",
    accentText: "text-[var(--field)]",
    accentBackground: "bg-[var(--dry)]",
    accentInk: "text-[var(--coal)]",
    accentHover: "hover:bg-[var(--field)] hover:text-[var(--bone)]",
    focusRule: "border-[var(--dry)]",
    pathways: "bg-[var(--bone)] text-[var(--coal)]",
    pathwayRule: "border-[var(--dry)]",
    pathwayMuted: "text-[var(--field)]",
  },
  protection: {
    hero: "bg-[var(--coal)] text-[var(--bone)]",
    heroRule: "border-white/20",
    heroMuted: "text-white/70",
    accentText: "text-[var(--bone)]",
    accentBackground: "bg-[var(--red)]",
    accentInk: "text-[var(--bone)]",
    accentHover: "hover:bg-[var(--bone)] hover:text-[var(--coal)]",
    focusRule: "border-[var(--red)]",
    pathways: "bg-[var(--coal)] text-[var(--bone)]",
    pathwayRule: "border-[var(--red)]",
    pathwayMuted: "text-[var(--dry)]",
  },
};

function SectionMarker({
  number,
  label,
  ruleClass = "border-[var(--coal)]",
  textClass = "text-[var(--coal)]/65",
}: {
  number: string;
  label: string;
  ruleClass?: string;
  textClass?: string;
}) {
  return (
    <div
      className={`font-mono flex items-center justify-between gap-6 border-b pb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${ruleClass} ${textClass}`}
    >
      <span>{number}</span>
      <span className="text-right">{label}</span>
    </div>
  );
}

export default function ProgramPage({
  programmeNumber,
  tone,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
  overviewTitle,
  overview,
  focusTitle,
  focusItems,
  pathways,
  closingTitle,
  closingText,
}: ProgramPageProps) {
  const styles = toneStyles[tone];
  const closingSectionNumber = pathways ? "04" : "03";

  return (
    <>
      <section className={styles.hero}>
        <div className={`mx-auto max-w-[1440px] border-x ${styles.heroRule}`}>
          <div
            className={`font-mono flex items-center justify-between gap-5 border-b px-5 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] sm:px-8 lg:px-10 ${styles.heroRule} ${styles.heroMuted}`}
          >
          </div>

          <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.08fr)]">
            <div
              className={`flex min-h-[34rem] flex-col justify-between border-b px-5 py-10 sm:min-h-[39rem] sm:px-8 sm:py-14 lg:min-h-[46rem] lg:border-b-0 lg:border-r lg:px-10 lg:py-16 xl:px-16 ${styles.heroRule}`}
            >
              <div>
                <div className="page-enter font-mono flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className={`${styles.accentText} text-4xl leading-none sm:text-5xl`}>
                    {programmeNumber}
                  </span>
                  <span className={`max-w-44 border-l pl-4 leading-5 ${styles.heroRule} ${styles.heroMuted}`}>
                    {eyebrow}
                  </span>
                </div>

                <h1 className="page-enter-delay font-display mt-10 max-w-[12ch] text-balance text-[clamp(3.4rem,7.2vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.035em]">
                  {title}
                </h1>
              </div>

              <div className={`page-enter-delay mt-12 border-t pt-6 ${styles.heroRule}`}>
                <p className={`max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${styles.heroMuted}`}>
                  {description}
                </p>
              </div>
            </div>

            <figure className={`image-wrap image-reveal grid border-b lg:grid-rows-[1fr_auto] lg:border-b-0 ${styles.heroRule}`}>
              <div className="relative aspect-[5/4] min-h-0 overflow-hidden sm:aspect-[4/3] lg:aspect-auto">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="field-photo object-cover"
                  style={{ objectPosition: imagePosition }}
                />
              </div>
              <figcaption
                className={`font-mono grid grid-cols-[auto_1fr] gap-5 border-t px-5 py-4 text-[0.65rem] uppercase tracking-[0.16em] sm:px-8 lg:px-10 ${styles.heroRule} ${styles.heroMuted}`}
              >
                <span className="text-right">{imageAlt}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bone)] text-[var(--coal)]">
        <div className="mx-auto max-w-[1440px] border-x border-[var(--coal)]/20 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <SectionMarker />
          <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(13rem,0.55fr)_minmax(0,1.45fr)] lg:gap-20 lg:pt-12">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--field)]">
            {eyebrow}
            </p>
            <div>
              <h2 className="font-display max-w-3xl text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
                {overviewTitle}
              </h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--coal)]/70 sm:text-xl sm:leading-9">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[var(--coal)]">
        <div className="mx-auto max-w-[1440px] border-x border-[var(--coal)]/20 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <SectionMarker/>
          <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20 lg:pt-12">
            <div>
              <h2 className="font-display mt-5 max-w-lg text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.025em] sm:text-6xl">
                {focusTitle}
              </h2>
            </div>

            <ol className={`border-t ${styles.focusRule}`}>
              {focusItems.map((item, index) => (
                <li
                  key={item}
                  className={`grid grid-cols-[3rem_1fr] gap-4 border-b py-5 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-6 ${styles.focusRule}`}
                >
                  <span className="font-mono text-xs font-bold tracking-[0.16em] text-[var(--field)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold leading-7 sm:text-lg">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {pathways && (
        <section className={styles.pathways}>
          <div className={`mx-auto max-w-[1440px] border-x px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28 ${styles.pathwayRule}`}>
            <SectionMarker/>
            <div className="grid gap-10 pt-8 lg:grid-cols-[minmax(14rem,0.55fr)_minmax(0,1.45fr)] lg:gap-20 lg:pt-12">
              <div>
                <h2 className="font-display mt-5 max-w-md text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.025em] sm:text-6xl">
                  Choose the path that suits your goals.
                </h2>
              </div>

              <div className={`border-t ${styles.pathwayRule}`}>
                {pathways.map((pathway, index) => (
                  <article
                    key={pathway.title}
                    className={`grid gap-5 border-b py-7 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:gap-6 sm:py-8 ${styles.pathwayRule}`}
                  >
                    <span className={`font-mono text-xs font-bold tracking-[0.16em] ${styles.pathwayMuted}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-black uppercase leading-7 tracking-[-0.015em] sm:text-3xl">
                      {pathway.title}
                    </h3>
                    <p className="leading-7 opacity-75">{pathway.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  );
}
