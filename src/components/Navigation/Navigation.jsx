import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
