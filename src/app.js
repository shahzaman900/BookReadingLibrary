import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
function App() {
	let [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const responce = await axios.get("http://127.0.0.1:3001/books");
		setBooks(responce.data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

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

	const createBook = async (title) => {
		const responce = await axios.post("http://127.0.0.1:3001/books", {
			title,
		});
		const book = [...books, responce.data];
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
