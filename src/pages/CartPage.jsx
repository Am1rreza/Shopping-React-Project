import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  // Hasdlers
  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  // Conditional rendering
  if (!cart.length)
    return (
      <Layout>
        <div className="emptyCart">
          <div>
            <h3>There is no product in your cart !</h3>
            <Link className="btn secondaryBtn" to={"/"}>
              Add some Products
            </Link>
          </div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <main className="container">
        <div className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="cartDetailSection">
                    <div className="itemImg">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price * item.quantity}$</div>
                  </div>
                  <div className="cartButtonSection">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementHandler(item)}>+</button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cartSummary">cart summary</section>
        </div>
      </main>
    </Layout>
  );
};

export default CartPage;
