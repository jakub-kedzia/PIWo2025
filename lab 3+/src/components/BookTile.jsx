function BookTile({ title, author, price }) {
  return (
    <article className="book-tile">
      <img className="tile-image" src="https://picsum.photos/200/300" />
      <section className="tile-desc">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} zł</p>
      </section>
      <section className="buy-button-area">
        <button className="button buy-button">Do koszyka</button>
      </section>
    </article>
  );
}

export default BookTile;
