import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();

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
              <span className="badge">{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
