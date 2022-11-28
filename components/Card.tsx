import Image from "next/image";

const Card = () => {
  return (
    <div className="border flex flex-col items-center p-4 m-3 rounded-lg hover:border-indigo-600 hover:border-2 hover:transition-all hover:duration-700 hover:cursor-pointer">
      <Image
        src="https://cdn.myanimelist.net/images/anime/1207/128768.jpg"
        alt="Naruto Image"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <p className="pt-2 text-xl font-medium">Naruto</p>
    </div>
  );
};

export default Card;
