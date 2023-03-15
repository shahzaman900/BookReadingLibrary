import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);

	const handleDeleteClick = () => {
		onDelete(book.id);
	};

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const onSubmit = (id, newTitle) => {
		setShowEdit(!showEdit);
		onEdit(id, newTitle);
	};

	let content = <h3>{book.title}</h3>;

	if (showEdit) {
		content = <BookEdit book={book} onSubmit={onSubmit} />;
	}

	return (
		<div className="book-show">
			<img
				alt={book.title}
				src={`https://picsum.photos/seed/${book.id}300/200`}
			></img>
			{content}
			<div className="actions">
				<button className="edit" onClick={handleEditClick}>
					Edit
				</button>
				<button className="delete" onClick={handleDeleteClick}></button>
			</div>
		</div>
	);
}

export default BookShow;
