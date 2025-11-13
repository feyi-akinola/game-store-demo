export default function GenreTag({ genre }: { genre: string }) {
  return (
    <span className="text-white/80 text-xs bg-white/15 px-4 py-2
      rounded-full font-semibold tracking-widest hover:bg-purple-900/80
      transition-all duration-200">
      {genre}
    </span>
  );
}