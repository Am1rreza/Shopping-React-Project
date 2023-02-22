import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Switch>
        <Route path={"/checkout"} component={CheckoutPage} />
        <Route path={"/cart"} component={CartPage} />
        <Route path={"/login"} component={LoginPage} />
        <Route path={"/signup"} component={SignupPage} />
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </CartProvider>
  );
}

export default App;
