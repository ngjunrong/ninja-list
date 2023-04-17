import Link from "next/link";
import styles from "../styles//Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {" "}
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          natus dolor velit, cupiditate cumque, debitis consequuntur harum quis
          quasi similique itaque praesentium facilis vitae a earum. Quisquam
          animi repudiandae placeat.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          ratione eligendi et? Consequuntur perspiciatis natus sed, fuga placeat
          officia nulla! Libero at iusto cumque aperiam omnis, dicta sunt. Non,
          temporibus.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          {" "}
          See Ninja Listing{" "}
        </Link>
      </div>
    </>
  );
}
