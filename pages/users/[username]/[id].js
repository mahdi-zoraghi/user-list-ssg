import Head from "next/head";

const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>User List | {user.username}</title>
      </Head>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <p>{user.address.city}</p>
      </div>
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString(), username: user.username.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default User;
