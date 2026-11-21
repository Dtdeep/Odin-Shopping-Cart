import ProductItemCard from "../../components/ProductItem/ProductItemCard";
import styles from "./ShopPage.module.css";
const ShopPage = ({ shoppingItems }) => {
  if (!shoppingItems) {
    return <h1>Loading</h1>;
  }

  return (
    <main className={styles.main}>
      {shoppingItems.map((product) => {
        return (
          <ProductItemCard
            productId={product.id}
            imagePath={product.image}
            productName={product.title}
            productPrice={product.price}
          />
        );
      })}
    </main>
  );
};

export default ShopPage;
