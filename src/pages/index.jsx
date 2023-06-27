import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [count,setCount] = useState(1);

  const handleClick = (e) => {
    // ①と②の挙動は全く違う. useStateのset関数で直前の値を使う場合は、引数で受け取るようにする
    
    // ①
    setCount(count => count + 1);
    setCount(count => count + 1);

    // ②
    // setCount(count + 1);
    // setCount(count + 1);

  }

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
