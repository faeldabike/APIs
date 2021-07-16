/* eslint-disable linebreak-style */
import { apiBase, apiKey } from '../../lib/tmdb';

export default async (req, res) => {
  const { q } = req.query;

  const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`);
  const json = await result.json();

  res.status(200).json({
    list: json.results,
  });
};
