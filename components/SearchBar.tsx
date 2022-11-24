const SearchBar = () => {
  return (
    <div className="text-center p-5">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border-2 rounded"
        placeholder="Search a title"
      />
    </div>
  );
};

export default SearchBar;
