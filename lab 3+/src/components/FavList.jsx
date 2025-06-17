import { useContext } from "react";
import { Context } from "../context/Context";

export default function FavList() {
  const { favourites, dispatch } = useContext(Context);

  const handle_remove = (name) => {
    dispatch({ type: "REMOVE", payload: name });
  };

  return (
    <>
      <ol>
        {Array.isArray(favourites) && favourites.length > 0 ? (
          favourites.map((fav) => (
            <li>
              {fav}{" "}
              <button
                onClick={() => {
                  handle_remove(fav);
                }}
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p>No favourites to display.</p>
        )}
      </ol>
    </>
  );
}
