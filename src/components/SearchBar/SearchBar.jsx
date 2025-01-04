import React from "react";
import toast, { Toaster } from "react-hot-toast";
import s from './SearchBar.module.css';

export default function SearchBar({ onSearchChanged }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const query = form.elements.query.value;

        if (query.trim() === "") {
            toast("Please enter search query!");
            return;
        }

        onSearchChanged(query);
    };

    return (
        <div className={s.searchBar}>
            <form className={s.searchForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                    className={s.searchInput}
                />
                <Toaster />
                <button type="submit" className={s.searchButton}>
                    Search
                </button>
            </form>
        </div>
    );
}
