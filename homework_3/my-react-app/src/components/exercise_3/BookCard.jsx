// child: details of each book: title, author, genre, availability

function BookCard({ title, author, genre, available }) {

    return (
        <div className={`book-card ${available ? "available" : "unavailable"}`}>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Availability:</strong> {available ? "Available" : "Not available"}</p>
        </div>
    )
}

export default BookCard