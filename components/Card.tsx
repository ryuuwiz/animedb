import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="border-2 flex flex-col items-center pt-4 m-2 rounded">
        <Image
          src="https://cdn.myanimelist.net/images/anime/1207/128768.jpg"
          alt="Naruto Image"
          width={200}
          height={200}
        />
        <p className="p-2 text-xl font-medium">Naruto</p>
      </div>
    </>
  );
};

export default Card;
