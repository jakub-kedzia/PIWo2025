export const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(
        "Book ",
        action.payload,
        " was added to the favourites list."
      );
      return [...state, action.payload];

    case "REMOVE":
      console.log(
        "Book ",
        action.payload,
        " was removed from the favourites list."
      );
      return state.filter((book) => book.name !== action.payload);

    default:
      console.error("No action of this type is defined: ", action.type);
      return state;
  }
};
