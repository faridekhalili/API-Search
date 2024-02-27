import React, { useRef } from "react";
import "../styles/Search.css";

type SearchType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ query, setQuery, source, setSource }: SearchType) {
  const searchText = useRef<HTMLInputElement>(null);

  function handleSearchChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchText.current != null) {
      const checkInput = searchText.current.value;

      if (checkInput !== "") {
        setQuery(checkInput);
      }
    }
  }

  return (
    <div className="search">
      <h1 className="title">Me.com</h1>
      <form className="form" onSubmit={(e) => handleSearchChange(e)}>
        <input
          type="search"
          placeholder="Start typing to search..."
          ref={searchText}
          className="search-box"
        />
        <select
          defaultValue={source}
          onChange={(e) => setSource(e.target.value)}
          className="dropdown"
        >
          <option value="StackOverflow">StackOverflow</option>
          <option value="GIPHY">GIPHY</option>
          <option value="Wikipedia">Wikipedia</option>
        </select>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
