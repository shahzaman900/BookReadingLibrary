import BookShow from "./BookShow";


function BookList({ books, onDelete, onEdit }) {
	const renderBooks = books.map((book) => {
		return <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit}  />;
	});

	return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
