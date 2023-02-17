import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Switch>
      <Route path={"/cart"} component={CartPage} />
      <Route exact path={"/"} component={HomePage} />
    </Switch>
  );
}

export default App;
