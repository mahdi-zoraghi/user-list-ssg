import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Users.module.css";

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>User List | Users</title>
      </Head>
      <div>
        <h1>All Users</h1>
        {users.map((user) => (
          <Link
            href={`/users/${user.username.toLowerCase()}/${user.id}`}
            key={user.id}
          >
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;
