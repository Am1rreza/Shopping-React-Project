import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route path={"/cart"} component={CartPage} />
        <Route exact path={"/"} component={HomePage} />
      </div>
    </Switch>
  );
}

export default App;
