import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home({ topAnime }: any) {
  const [query, setQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<any>();

  const searchAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
    const animeQuery = await res.json();
    setSearchData(animeQuery);

    console.log(animeQuery);
  };

  return (
    <div className="p-4 md:max-w-screen-md mx-auto">
      <SearchBar query={query} setQuery={setQuery} searchAnime={searchAnime} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {!searchData
          ? topAnime.data.map((anime: any) => (
              <Card anime={anime} key={anime.mal_id} />
            ))
          : searchData.data.map((anime: any) => (
              <Card anime={anime} key={anime.mal_id} />
            ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const topAnime = await res.json();

  return {
    props: {
      topAnime,
    },
  };
}
