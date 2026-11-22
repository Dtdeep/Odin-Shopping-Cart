import ProductItemCard from "../../components/ProductItem/ProductItemCard";
import styles from "./ShopPage.module.css";
const ShopPage = ({ shoppingItems, handleAddCart, error }) => {
  if (shoppingItems.length === 0) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <main data-testid="shopPage" className={styles.main}>
      {shoppingItems.map((product) => {
        return (
          <ProductItemCard
            key={product.id}
            productId={product.id}
            imagePath={product.image}
            productName={product.title}
            productPrice={product.price}
            handleAddCart={handleAddCart}
          />
        );
      })}
    </main>
  );
};

export default ShopPage;
