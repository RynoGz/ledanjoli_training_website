export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">

        <p>
          © {new Date().getFullYear()} Le Danjoli
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Professional Dog Training
        </p>

      </div>
    </footer>
  );
}