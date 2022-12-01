import Image from "next/image";
import { AnimeQueryData } from "../types/AnimeQuery";
import { TopAnimeData } from "../types/topAnime";

const Card = ({ anime }: { anime: TopAnimeData | AnimeQueryData }) => {
  return (
    <div className="border flex flex-col items-center px-4 pt-4 m-3 rounded hover:border-indigo-600 hover:border-2 hover:transition-all hover:duration-700 hover:cursor-pointer">
      <Image
        src={anime.images.webp.image_url}
        alt={anime.title}
        width={200}
        height={200}
        className="rounded"
      />
      <p className="my-2 text-xl font-medium">{anime.title}</p>
    </div>
  );
};

export default Card;
