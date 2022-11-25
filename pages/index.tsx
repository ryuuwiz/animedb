import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="p-4">
      <SearchBar />
      <div className="flex flex-col">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
