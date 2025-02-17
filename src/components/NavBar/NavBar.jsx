import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "../../assets/logo.png"; 

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><img src={logo} alt="Logo" style={{ maxHeight: "60px", width: "auto" }} /></Link>
      <ul className="nav-links">
        <li><Link to="/category/remeras">Camas</Link></li>
        <li><Link to="/category/pantalones">Sillas</Link></li>
        <li><Link to="/category/zapatillas">Mesas</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
