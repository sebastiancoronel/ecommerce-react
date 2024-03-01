export default function Hero() {
  return (
    <section className="w-full h-[904px] bg-[url('/hero.webp')] bg-contain bg-no-repeat bg-right overflow-hidden border-b border-gray-200">
      <div className="bg-white w-[941px] h-[904px]">
        <div className="text-black relative top-[400px] p-28 flex flex-col gap-2">
          <h1 className="text-black text-5xl font-extrabold">
            Music's Next Move
          </h1>
          <h2 className="text-gray-600 font-semibold">
            Goes where no portable speaker has gone before. Acoustically.
            Aesthetically. Effortlessly.
          </h2>
          <button className="bg-blue-500 text-white text-sm p-4 rounded-lg w-[160px]">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
