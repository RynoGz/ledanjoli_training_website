import Link from "next/link";

interface TrainingCardProps {
  title: string;
  description: string;
  href: string;
}

export default function TrainingCard({
  title,
  description,
  href,
}: TrainingCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p>{description}</p>

      </div>
    </Link>
  );
}