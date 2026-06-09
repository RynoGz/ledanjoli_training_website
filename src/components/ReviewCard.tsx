interface ReviewCardProps {
  name: string;
  review: string;
}

export default function ReviewCard({
  name,
  review,
}: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="mb-4">
        ⭐⭐⭐⭐⭐
      </p>

      <p>{review}</p>

      <p className="mt-4 font-semibold">
        - {name}
      </p>
    </div>
  );
}