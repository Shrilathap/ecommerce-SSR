import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={`${styles.link} ${styles.inactive}`}>HOME</Link>
      <span className={styles.separator}>|</span>
      <Link href="/shop" className={styles.link}>SHOP</Link>
    </nav>
  );
}
