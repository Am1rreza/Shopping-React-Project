import Layout from "../Layout/Layout";
import * as data from "../data";

const HomePage = () => {
  // Handlers
  const addProductHandler = (product) => {
    console.log(product);
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
                  <button className="btn primaryBtn" onClick={() => addProductHandler(product)}>
                    Add to Cart
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
