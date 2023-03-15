import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
function App() {
	let [books, setBooks] = useState([]);

	const updateBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, title: newTitle };
			}
			return book;
		});

		setBooks(updatedBooks);
	};

	const deleteBookById = (id) => {
		const updateBooks = books.filter((book) => book.id !== id);
		setBooks(updateBooks);
	};

	const createBook = (title) => {
		const book = [
			...books,
			{ id: Math.floor(Math.random() * 9999), title },
		];
		setBooks(book);
	};

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList
				books={books}
				onDelete={deleteBookById}
				onEdit={updateBookById}
			/>
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;

// https://state-updates.vercel.app/#State%20Updates
