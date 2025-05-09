"use client";
import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import { SearchForm } from "@/app/_components/Search/SearchForm";
import { SearchResult } from "@/app/_components/Search/Result/Result";
import "@/app/_css/search.css";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { Loader } from "@/app/_components/Loader";
import { CiSearch } from "react-icons/ci";
const search = () => {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("query");
  const [query, setQuery] = useQueryState("query");
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductResults = async (term) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LIVE_URL}/api/search?query=${term}`
    );
    const data = await res.json();
    setQuery(term);
    setSearchResult(data);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    setQuery(defaultQuery);
    fetchProductResults(defaultQuery);
  }, []);
  const onSearchChange = async (e) => {
    setIsLoading(true);
    fetchProductResults(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const debouncedOnChange = debounce(onSearchChange, 500);

  return (
    <div className="main">
      <div className="ais-InstantSearch">
        <div className="ais-SearchBox">
          <form className="ais-SearchBox-form" onSubmit={handleFormSubmit}>
            <CiSearch className="w-8 h-8" />
            <input
              type="search"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              required=""
              maxlength="512"
              aria-label="Search"
              placeholder="Search Garmin AE"
              className="ais-SearchBox-input"
              onChange={debouncedOnChange}
              defaultValue={query}
            ></input>
          </form>
        </div>
        {!isLoading && searchResult.docs ? (
          <SearchResult searchResult={searchResult} query={query} />
        ) : (
          <div className="my-24">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default search;
