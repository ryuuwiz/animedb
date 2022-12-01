import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home({ topAnime }: any) {
  const initialData = topAnime.data;

  return (
    <div className="p-4 md:max-w-screen-md mx-auto">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {initialData.map((anime: any) => (
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
