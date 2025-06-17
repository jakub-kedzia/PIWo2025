import { useState, useContext } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Context } from "../context/Context";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0.0);
  const { user, setBooksList } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user == null) {
      console.log("Please log in to add a book.");
      return;
    }

    const book = {
      user: user.uid,
      title: title,
      author: author,
      price: parseFloat(price),
    };

    try {
      const coll = collection(db, "books");
      await addDoc(coll, book);
      console.log(
        "A new book named ",
        book.title,
        " was added to the Firestore database."
      );
      getBooks();
    } catch (error) {
      console.error(
        "An error occurred while trying to add a new book to the Firestore database: ",
        error
      );
    }
  };

  const getBooks = async () => {
    try {
      const coll = collection(db, "books");
      const snapshot = await getDocs(coll);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBooksList(data);
    } catch (error) {
      console.error("Błąd podczas pobierania danych: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "300px",
      }}
    >
      <label>
        Tytuł:
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </label>
      <label>
        Autor:
        <input
          value={author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
      </label>
      <label>
        Cena:
        <input
          value={price}
          step="0.01"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
}
