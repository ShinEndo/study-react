import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Index</Link>
      <Link href="/about/">About</Link>
    </header>
  );
}
