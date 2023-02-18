import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <Layout>
      <main>
        {cart.length ? (
          cart.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })
        ) : (
          <div>
            <h3>There is no product in the cart !</h3>
            <Link to={"/"}>Add some Products</Link>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default CartPage;
