import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main data-testid="homePage" className={styles.main}>
      <div className={styles.leftDiv}>
        <p className={styles.collection}>Collection 04 -- Essential Living</p>
        <h1 className={styles.leftHeader}>
          Everyday objects crafted with quiet intent.
        </h1>
        <p className={styles.description}>
          Tactile materiality and enduring forms shaped for stillness, daily
          utility and mindful rituals.
        </p>
      </div>
      <div className={styles.imgDiv}></div>
    </main>
  );
};

export default HomePage;
