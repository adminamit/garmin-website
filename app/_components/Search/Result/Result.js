import React from "react";
import { SearchResultCard } from "./Card";
export const SearchResult = ({ searchResult, query }) => {
    const { docs, totalDocs } = searchResult;
    return (
        <div className="results">
            <div className="results__container">
                <div className="ais-StateResults">
                    <div className="results-found">
                        <span>{totalDocs} result(s) found</span>
                    </div>
                    <div className="ais-QueryRuleCustomData">
                        {searchResult.docs.length > 0 ? (
                            <div className="cards">
                                {docs.map((product) => {
                                    return (
                                        <SearchResultCard product={product} />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="oswald text-lg font-extralight pb-16">
                                No results matched your query{" "}
                                <strong>"{query}"</strong>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
