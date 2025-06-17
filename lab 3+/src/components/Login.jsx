import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Login() {
  const { user, setUser } = useContext(Context);

  const handle_login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        uid: user.uid,
        displayName: user.displayName,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(user);

      console.log("Logged in :", user.displayName, ", ", user.uid);
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

          if (user == null) {
            handle_login();
          } else {
            setUser(null);
            localStorage.removeItem("user");
          }
        }}
      >
        {user == null ? "Zaloguj" : "Wyloguj"}
      </a>
    </>
  );
}
