import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchForm = () => {
    return (
        <div className="ais-SearchBox">
            <form className="ais-SearchBox-form">
                <input
                    type="search"
                    autocorrect="off"
                    autocapitalize="off"
                    autocomplete="off"
                    spellcheck="false"
                    required=""
                    maxlength="512"
                    aria-label="Search"
                    placeholder="Search Garmin.com"
                    className="ais-SearchBox-input"
                    data-dashlane-rid="f0ec5c11c256e31b"
                    data-form-type=""
                ></input>
            </form>
        </div>
    );
};
