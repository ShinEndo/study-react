import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [count,setCount] = useState(1);

  const handleClick = useCallback((e) => {
    if(count < 10) {
      setCount(count => count + 1);
    }
  },[count]);
  

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
      <button onClick={handleClick}>ボタン</button>
      <h1>{count}</h1>
      <Main title="index" />
    </>
  );
}
