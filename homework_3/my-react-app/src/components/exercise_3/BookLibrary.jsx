// parent: the filtering state --> displaying the list of BookCard components based on the selected filter state (All Books / Available Books buttons); filter --> string

import { useState } from "react";
import BookCard from "./BookCard";

function BookLibrary({ books }) {
    const [filter, setFilter] = useState("");

    const handleAllBooksBtn = () => {
        setFilter("all")
    };

    const handleAvailableBooksBtn = () => {
        setFilter("available")
    };

    return (
        <div className="book-container">
            <h1>My Book Library</h1>
            <button className="filter-btn" onClick={handleAllBooksBtn}>All Books</button>
            <button className="filter-btn" onClick={handleAvailableBooksBtn}>Available Books</button>
            <div className="booklist">
                {books
                    // .filter(book => filter === "all" || book.available === true)
                    .filter(book => {
                        if (filter === "all") return true
                        if (filter === "available") return book.available
                    })
                    .map((book) => {
                        return <BookCard key={book.id} title={book.title} author={book.author} genre={book.genre} available={book.available} />
                    })}
            </div>
        </div>
    )
}

export default BookLibrary