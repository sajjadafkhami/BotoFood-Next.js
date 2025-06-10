
import styles from "./Guide.module.css";
import LinK from "next/linK"

function Guide() {
  return (
    <div className={styles.container}>
      <LinK href="/menu">Menu</LinK>
      <LinK href="/categories">Categories</LinK>
      <LinK href="/">Discount</LinK>
    </div>
  );
}

export default Guide;