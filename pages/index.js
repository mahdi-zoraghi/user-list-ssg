import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Dolore consectetur ullamco amet anim adipisicing aliquip aliqua non
          aute non.Quis id nostrud proident consequat tempor voluptate ut
          officia.
        </p>
        <p className={styles.text}>
          Dolore consectetur ullamco amet anim adipisicing aliquip aliqua non
          aute non.Quis id nostrud proident consequat tempor voluptate ut
          officia.
        </p>
        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  );
}

export default Home;
