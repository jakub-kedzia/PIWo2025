const book_grid = document.getElementById("book-grid");

const books = [
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

function render_list(list) {
  book_grid.innerHTML = "";

  list.forEach((book) => {
    const book_tile = document.createElement("article");
    book_tile.className = "book-tile";

    book_tile.innerHTML = `
    <img class="tile-image" src="https://picsum.photos/200/300"
    <section class="tile-desc">
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.price} zł</p>
    </section>
    <section class="buy-button-area">
      <button class="button buy-button">Do koszyka</button>
    </section>
  `;

    book_grid.appendChild(book_tile);
  });
}

render_list(books);

const input = document.getElementsByClassName("search-bar");
const search_bar = input[0];

search_bar.addEventListener("input", (event) => {
  const phrase = event.target.value;

  const filtered_list = books.filter(
    (book) =>
      book.title.toLowerCase().includes(phrase.toLowerCase()) ||
      book.author.toLowerCase().includes(phrase.toLowerCase())
  );

  render_list(filtered_list);
});
