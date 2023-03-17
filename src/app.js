import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
function App() {
	let [books, setBooks] = useState([]);

	// ////////////////////// Load Books ////////////////
	const fetchBooks = async () => {
		const responce = await axios.get("http://127.0.0.1:3001/books");
		setBooks(responce.data);
	};
	useEffect(() => {
		fetchBooks();
	}, []);

	// ////////////////////// Update Book ////////////////
	const updateBookById = async (id, newTitle) => {
		const responce = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
			title: newTitle,
		});
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...responce.data };
			}
			return book;
		});

		setBooks(updatedBooks);
	};

	// ////////////////////// Delete Book ////////////////
	const deleteBookById = async (id) => {
		await axios.delete(`http://127.0.0.1:3001/books/${id}`);
		const updateBooks = books.filter((book) => book.id !== id);
		setBooks(updateBooks);
	};

	// ////////////////////// Book Creation////////////////
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
