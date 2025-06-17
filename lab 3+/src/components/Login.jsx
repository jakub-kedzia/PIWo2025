import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useState, useContext } from "react";
import { Context } from "../context/Context";

export default function Login() {
  const { setUser } = useContext(Context);

  const handle_login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log("Logged in :", user.displayName);
    } catch (error) {
      console.error("While trying to log in, an error occurred: ", error);
    }
  };

  return (
    <>
      <a
        className="navlink"
        onClick={(e) => {
          e.preventDefault;
          handle_login();
        }}
      >
        Login
      </a>
    </>
  );
}
