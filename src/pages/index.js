import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Place</h1>
      <div className={styles.button}>Connect Wallet</div>
    </div>
  );
}
