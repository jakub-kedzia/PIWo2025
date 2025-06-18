import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

export default function FavList() {
  const { favourites, dispatch } = useContext(Context);

  const handle_remove = (name) => {
    dispatch({ type: "REMOVE", payload: name });
  };

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("fav")) != [])
  //     setLocalFavList(JSON.parse(localStorage.getItem("fav")));
  //   console.log("ananananas");
  // }, []);

  return (
    <>
      <ol>
        {Array.isArray(favourites) && favourites.length > 0 ? (
          favourites.map((fav) => (
            <li key={fav}>
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
