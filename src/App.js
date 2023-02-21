import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Switch>
        <Route path={"/cart"} component={CartPage} />
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </CartProvider>
  );
}

export default App;
