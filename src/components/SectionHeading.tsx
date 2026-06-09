interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="uppercase tracking-widest text-green-600 mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}