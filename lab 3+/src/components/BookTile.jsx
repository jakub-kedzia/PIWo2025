import { useContext } from "react";
import { Context } from "../context/Context";

function BookTile({ title, author, price }) {
  const { dispatch } = useContext(Context);

  const handle_click = () => {
    console.log("Clicked on add to favourites.");
    dispatch({ type: "ADD", payload: title });
  };

  return (
    <article className="book-tile">
      <img className="tile-image" src="https://picsum.photos/200/300" />
      <section className="tile-desc">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} zł</p>
      </section>
      <section className="buy-button-area">
        <button className="button buy-button" onClick={handle_click}>
          Do ulubionych
        </button>
      </section>
    </article>
  );
}

export default BookTile;
