import React, { useEffect, createContext, useState, use } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [booksList, setBooksList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
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

    getBooks();
  }, []);

  return (
    <Context.Provider value={{ booksList, setBooksList, user, setUser }}>
      {children}
    </Context.Provider>
  );
};

// [
//   { title: "Zbrodnia i kara", price: 39.99, author: "Fiodor Dostojewski" },
//   { title: "Duma i uprzedzenie", price: 34.9, author: "Jane Austen" },
//   { title: "1984", price: 29.5, author: "George Orwell" },
//   { title: "Wielki Gatsby", price: 31.8, author: "F. Scott Fitzgerald" },
//   {
//     title: "Sto lat samotności",
//     price: 44.2,
//     author: "Gabriel García Márquez",
//   },
//   { title: "Mistrz i Małgorzata", price: 36.75, author: "Michaił Bułhakow" },
//   { title: "Buszujący w zbożu", price: 27.6, author: "J.D. Salinger" },
//   { title: "Ojciec Goriot", price: 32.1, author: "Honoré de Balzac" },
//   { title: "Przeminęło z wiatrem", price: 49.9, author: "Margaret Mitchell" },
//   { title: "Bracia Karamazow", price: 42.0, author: "Fiodor Dostojewski" },
//   { title: "Don Kichot", price: 45.6, author: "Miguel de Cervantes" },
//   { title: "Anna Karenina", price: 40.3, author: "Lew Tołstoj" },
// ]
