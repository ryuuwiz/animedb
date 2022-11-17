import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title } = req.query;
  const data = await fetch(
    `https://api.jikan.moe/v4/anime?q=${title}&sfw`
  ).then((res) => res.json());

  res.status(200).json({ data });
}
