import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
const Header = () => {

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/howtouse">How to use</Link>
        <Link to="/books">Browse books</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
