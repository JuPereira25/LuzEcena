import { useState, useEffect } from 'react';
import { getMovies } from '../api';
import type { Movie } from '../components/Types';

interface UseFetchMoviesReturn {
  movies: Movie[];
  error: string | null;
  isLoading: boolean;
}

const useFetchMovies = (): UseFetchMoviesReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao buscar filmes');
        console.error("Erro ao buscar filmes:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  return { movies, error, isLoading };
};

export default useFetchMovies;