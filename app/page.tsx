export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-6">
        Alanex Institute
      </h1>

      <p className="text-xl text-center max-w-2xl text-gray-300 mb-8">
        Luxury Cosmetology Education Reimagined
      </p>

      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition">
        Enter The Academy
      </button>
    </main>
  );
}