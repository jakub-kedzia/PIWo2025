import "../style.css";
import BookTile from "./BookTile.jsx";
import { useState, useContext } from "react";
import { Context } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { booksList } = useContext(Context);

  const [searchPhrase, setSearchPhrase] = useState("");

  const navigate = useNavigate();

  const filteredList = booksList.filter(
    (book) =>
      book.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      book.author.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <>
      <section className="search-area">
        <input
          className="search-bar"
          placeholder="Wyszukaj..."
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
      </section>
      <hr className="horizontal-separator sep-bottom" />
      <section className="options">
        <button className="button">Sortuj</button>
        <button className="button">Filtruj</button>
        <button className="button" onClick={() => navigate("/new-book")}>
          Dodaj książkę
        </button>
        <button className="button" onClick={() => navigate("/my-books")}>
          Pokaż moje
        </button>
      </section>
      <section className="book-grid" id="book-grid">
        {filteredList.map((book) => (
          <BookTile
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </section>
    </>
  );
}

export default HomePage;
