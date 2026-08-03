import Image from "next/image";
import Link from "next/link";

interface TrainingCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  number: string;
  href: string;
  descriptor: string;
}

export default function TrainingCard({
  title,
  description,
  image,
  imageAlt,
  number,
  href,
  descriptor,
}: TrainingCardProps) {
  return (
    <article className="border-t border-[#171a17] last:border-b">
      <Link
        href={href}
        className="group grid grid-cols-[2.75rem_1fr_auto] gap-x-5 gap-y-5 py-6 transition-colors hover:bg-[#e9e1d2] focus-visible:outline-offset-[-3px] sm:grid-cols-[3.5rem_1fr_auto] sm:px-4 lg:grid-cols-[4rem_minmax(12rem,0.82fr)_minmax(17rem,1.25fr)_12rem_2.5rem] lg:items-center lg:py-5"
      >
        <span className="meta-type col-start-1 row-start-1 text-xs font-semibold tracking-[0.12em] text-[#b13c2e] lg:col-start-auto lg:row-start-auto">
          {number}
        </span>

        <div className="col-start-2 row-start-1 lg:col-start-auto lg:row-start-auto">
          <p className="meta-type text-[0.62rem] font-medium uppercase tracking-[0.13em] text-[#68685f]">
            {descriptor}
          </p>
          <h3 className="display-type mt-1 text-3xl uppercase leading-none text-[#171a17] sm:text-4xl">
            {title}
          </h3>
        </div>

        <p className="col-start-2 col-end-4 row-start-2 max-w-xl text-[1.02rem] leading-7 text-[#4f504b] sm:pr-8 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:pr-6">
          {description}
        </p>

        <div className="image-wrap relative col-start-1 col-end-4 row-start-3 aspect-[16/9] overflow-hidden bg-[#344538] sm:col-start-2 lg:col-span-1 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:aspect-[4/3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1023px) 90vw, 192px"
            className="field-photo object-cover"
          />
        </div>

        <span
          aria-hidden="true"
          className="display-type col-start-3 row-start-1 text-3xl text-[#b13c2e] transition-transform duration-300 group-hover:translate-x-1 sm:self-center lg:col-start-auto lg:row-start-auto"
        >
          →
        </span>
      </Link>
    </article>
  );
}
