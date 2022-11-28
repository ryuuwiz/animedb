import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="p-4 md:max-w-screen-md mx-auto">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
