import { useContext } from "react";
import { Context } from "../context/Context";
import BookTile from "./BookTile";

export default function MyBooks() {
  const { booksList, user } = useContext(Context);

  const filteredList = booksList.filter((book) => book.user == user.uid);

  return (
    <>
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
