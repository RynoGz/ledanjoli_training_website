interface ReviewCardProps {
  name: string;
  review: string;
}

export default function ReviewCard({ name, review }: ReviewCardProps) {
  return (
    <figure className="border-l-4 border-[#b13c2e] bg-[#faf7f0] px-6 py-7">
      <blockquote className="text-xl leading-8 text-[#171a17]">“{review}”</blockquote>
      <figcaption className="meta-type mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#68685f]">
        — {name}
      </figcaption>
    </figure>
  );
}
