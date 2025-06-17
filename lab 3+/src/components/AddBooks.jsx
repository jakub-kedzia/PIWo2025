import { useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const booksData = [
  { title: "Zbrodnia i kara", price: 39.99, author: "Fiodor Dostojewski" },
  { title: "Duma i uprzedzenie", price: 34.9, author: "Jane Austen" },
  { title: "1984", price: 29.5, author: "George Orwell" },
  { title: "Wielki Gatsby", price: 31.8, author: "F. Scott Fitzgerald" },
  {
    title: "Sto lat samotności",
    price: 44.2,
    author: "Gabriel García Márquez",
  },
  { title: "Mistrz i Małgorzata", price: 36.75, author: "Michaił Bułhakow" },
  { title: "Buszujący w zbożu", price: 27.6, author: "J.D. Salinger" },
  { title: "Ojciec Goriot", price: 32.1, author: "Honoré de Balzac" },
  { title: "Przeminęło z wiatrem", price: 49.9, author: "Margaret Mitchell" },
  { title: "Bracia Karamazow", price: 42.0, author: "Fiodor Dostojewski" },
  { title: "Don Kichot", price: 45.6, author: "Miguel de Cervantes" },
  { title: "Anna Karenina", price: 40.3, author: "Lew Tołstoj" },
];

const AddBooks = () => {
  useEffect(() => {
    const uploadBooks = async () => {
      const booksRef = collection(db, "books");

      for (const book of booksData) {
        try {
          await addDoc(booksRef, book);
          console.log(`Dodano: ${book.title}`);
        } catch (error) {
          console.error("Błąd przy dodawaniu:", error);
        }
      }
    };

    uploadBooks();
  }, []);

  return <div>Dodawanie książek do Firestore...</div>;
};

export default AddBooks;
