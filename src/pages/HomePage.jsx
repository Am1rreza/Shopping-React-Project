import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Providers/CartProvider";
import checkInCart from "../utils/checkInCart";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  // Handlers
  const addProductHandler = (product) => {
    toast.success(`${product.name} Added to Cart`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImg">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDescription">
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price}$</p>
                  </div>
                  <button
                    disabled={checkInCart(cart, product)}
                    className="btn primaryBtn addToCartBtn"
                    onClick={() => addProductHandler(product)}
                  >
                    {checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
