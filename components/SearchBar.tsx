import { Dispatch, SetStateAction } from "react";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  searchAnime: () => void;
}

const SearchBar = ({ query, setQuery, searchAnime }: IProps) => {
  const handleKeyDown = (e: any): void => {
    if (e.key === "Enter") {
      searchAnime();
    }
  };

  return (
    <div className="text-center px-2 py-8">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border-2 rounded"
        placeholder="Search a title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default SearchBar;
