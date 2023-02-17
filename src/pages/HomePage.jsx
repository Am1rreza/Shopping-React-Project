import Layout from "../Layout/Layout";
import * as data from "../data";

const HomePage = () => {
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
                  <p>{product.name}</p>
                  <p>{product.price}$</p>
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
