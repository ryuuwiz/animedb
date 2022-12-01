import { GetStaticProps } from "next/types";
import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import AnimeQuery, { AnimeQueryData } from "../types/AnimeQuery";
import TopAnime, { TopAnimeData } from "../types/TopAnime";

export default function Home({ topAnime }: { topAnime: TopAnime }) {
  const [query, setQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<AnimeQuery>();

  const searchAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
    const animeQuery: AnimeQuery = await res.json();

    setSearchData(animeQuery);
  };

  return (
    <div className="p-4 md:max-w-screen-md mx-auto">
      <SearchBar query={query} setQuery={setQuery} searchAnime={searchAnime} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {!searchData
          ? topAnime.data.map((anime: TopAnimeData) => (
              <Card anime={anime} key={anime.mal_id} />
            ))
          : searchData.data.map((anime: AnimeQueryData) => (
              <Card anime={anime} key={anime.mal_id} />
            ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const topAnime: TopAnime = await res.json();

  return {
    props: {
      topAnime,
    },
    revalidate: 60,
  };
};
