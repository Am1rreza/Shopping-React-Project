import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <h3>Shopping Project</h3>
        <ul>
          <li>
            <NavLink exact activeClassName="activeLink" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to={"/cart"}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
