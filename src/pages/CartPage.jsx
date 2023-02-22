import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  // Hasdlers
  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: cartItem });
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
                    <div>{item.offPrice * item.quantity}$</div>
                  </div>
                  <div className="cartButtonSection">
                    <button onClick={() => decrementHandler(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementHandler(item)}>+</button>
                  </div>
                </div>
              );
            })}
          </section>
          <CartSummary cart={cart} total={total} />
        </div>
      </main>
    </Layout>
  );
};

export default CartPage;

// Cart summary component
const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    : 0;

  return (
    <section className="cartSummary">
      <h3>Cart Summary</h3>
      <div className="summaryItem">
        <p>Products Prices</p>
        <p>{originalTotalPrice}$</p>
      </div>
      <div className="summaryItem">
        <p>Discount</p>
        <p>{originalTotalPrice - total}$</p>
      </div>
      <div className="summaryItem">
        <p>Total Price</p>
        <p>{total}$</p>
      </div>
    </section>
  );
};
