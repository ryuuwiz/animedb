import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-indigo-600 text-white flex justify-between items-center p-4">
      <h1 className="text-3xl">AnimeDB</h1>
      <ul className="flex justify-between">
        <li className="px-2">
          <Link href="/">Home</Link>
        </li>
        <li className="px-2">
          <a href="https://github.com/ryuuwiz/animedb">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
