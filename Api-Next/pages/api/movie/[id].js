/* eslint-disable linebreak-style */
import { apiBase, apiKey } from '../../../lib/tmdb';

export default async (req, res) => {
  const { id } = req.query;

  const result = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`);
  const json = await result.json();

  res.status(200).json({
    info: json,
  });
};
