import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/user-lost-logo.jpg"
          width={128}
          height={77}
          objectFit="contain"
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>User List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
