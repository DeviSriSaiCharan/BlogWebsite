export default function CarouselCard({src}) {
  return (
    <div className="w-full h-full flex gap-7 rounded-3xl bg-black hover:bg-zinc-900 hover:border hover:border-zinc-800">
      <img
        src={src}
        className="w-1/2  object-cover rounded-3xl"
      />
      <div className="w-1/2 text-left py-6 px-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-4xl mb-6">Change log for 2024</h2>
          <p className="text-xl text-zinc-400">
            Explore the latest updates and enhancements in our 2024 changelog.
            Discover new features and improvements that enhance user experience.
          </p>
        </div>
        <div className="flex  items-center gap-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <p>Devi Sri Sai Charan | 12 Jan 2024</p>
        </div>
      </div>
    </div>
  );
}
