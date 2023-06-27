import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    // DOMに直接触るのは、Reactでは基本的にNG（今回は例外）
    document.body.style.backgroundColor = "lightblue";
    return () => {
          document.body.style.backgroundColor = "";
    }
  },[]);
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main title="index" />
    </>
  );
}
