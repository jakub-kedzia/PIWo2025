import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  return (
    <>
      <section className="navbar">
        <div className="logo">
          <div>Księgarnia</div>
          <div>KLEKS</div>
        </div>
        <div className="nav-links">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/">
            O nas
          </Link>
          <Link className="navlink" to="/">
            Kontakt
          </Link>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "35px",
              backgroundColor: "#468484",
              margin: "0 10px",
            }}
          ></span>
          <Link className="navlink" to="fav-list">
            Ulubione
          </Link>
          <Login />
        </div>
      </section>

      <hr className="horizontal-separator sep-top" />
    </>
  );
}

export default Navbar;
