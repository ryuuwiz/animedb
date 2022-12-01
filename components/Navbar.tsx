import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-indigo-600 text-white flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">AnimeDB</h1>
      <ul className="flex justify-between text-md text-indigo-100 font-medium">
        <li className="px-2 hover:text-indigo-200">
          <Link href="/">Home</Link>
        </li>
        <li className="px-2 hover:text-indigo-200">
          <a href="https://github.com/ryuuwiz/animedb">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
