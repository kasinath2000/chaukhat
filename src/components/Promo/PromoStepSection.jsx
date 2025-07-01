export default function PromoStepSection() {
  return (
    <section className="bg-[#DDE1E6] text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img src="/images/woman-laptop.png" alt="Woman with Laptop" className="max-w-sm w-full rounded" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Go Ahead</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold outline-text mb-2">one step</h1>
          <p className="text-lg text-gray-600 mb-6">further with us</p>

          <p className="text-gray-700 mb-8">
            We promote and playlisting your market potential songs on major streaming platforms and their top playlist
            worldwide. Distribute your music with the power of promotion.
          </p>

          <button className="px-8 py-3 rounded-full border-2 border-white bg-transparent text-gray-900 font-medium hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
