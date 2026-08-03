interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`}
    >
      {subtitle && (
        <p
          className={`section-label ${centered ? "justify-center" : ""} ${
            inverted ? "text-[#d9cfb3]" : "text-[#b13c2e]"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`display-type mt-5 text-balance text-4xl uppercase leading-[0.94] sm:text-5xl lg:text-6xl ${
          inverted ? "text-[#f2ede2]" : "text-[#171a17]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
