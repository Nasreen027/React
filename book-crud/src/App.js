import { useState } from "react";
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);
  const [isEditIndex,setIsEditIndex] = useState(null);

  const sumbitBookFormHandler = (event) => {
    event.preventDefault();
    if (!title || !author || !isbn) {
      alert("Please fill out the fields");
      return;
    }
    if(isEditIndex === null) {
      // console.log(title)
      setBooks([...books, { title, author, isbn }]);
      // console.log(setBook,'book');
    }
    else{
      const tempBook = [...books];
      const findBook = tempBook[isEditIndex];
      // console.log(findBook,'findBook');
      findBook.title = title;
      findBook.author = author;
      findBook.isbn = isbn;
      console.log(findBook,'findBook');
      setBooks(tempBook);
      setIsEditIndex(null);
      alert("Book updated successfully!");
    }
    setTitle("");
    setAuthor("");
    setIsbn("");
  }
  const deleteBtnHandler = (event, index) => {
    event.preventDefault();
    if (window.confirm("Are you sure ?")) {
      const tempBook = [...books];
      tempBook.splice(index, 1);
      setBooks(tempBook);
      alert("Book deleted successfully!");
    }
  }
  const editBtnHandler = (event, index) => {
    event.preventDefault();
    // console.log(event,'event');
    setIsEditIndex(index);
    const findBook = books[index];
    setTitle(findBook.title);
    setAuthor(findBook.author);
    setIsbn(findBook.isbn);
    // console.log(findBook,'findBook');

  }
  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={sumbitBookFormHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            id="author"
            className="u-full-width"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          <label>ISBN#</label>
          <input
            type="number"
            id="isbn"
            className="u-full-width"
            value={isbn}
            onChange={(event) => setIsbn(event.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            className="u-full-width"
            value={isEditIndex !== null ? "Update" : "Create"}
          />
        </div>
      </form>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="book-list">
          {books.map((singleBook, index) => {
            return (
              <tr key={index}>
                <td>{singleBook.title}</td>
                <td>{singleBook.author}</td>
                <td>{singleBook.isbn}</td>
                <td>
                  <button onClick={(event) => editBtnHandler(event, index)}>
                    Edit
                  </button>
                </td>
                <td>
                  <a
                    href="#"
                    className="delete"
                    onClick={(event) => deleteBtnHandler(event, index)}
                  >
                    X
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
