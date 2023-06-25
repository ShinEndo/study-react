import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline>
          <code className={styles.code}>pages/{props.title}.js</code>
        </Headline>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <Links />
      </main>
    </>
  );
}
