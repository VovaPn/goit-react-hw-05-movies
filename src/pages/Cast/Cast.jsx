import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieAdd } from 'api/fetchMovies';
import { CastList } from '../../components/CastList/CastList';

const Cast = () => {
  const [movieCast, setMovieCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      const cast = await fetchMovieAdd(movieId, 'credits');
      setMovieCast(cast);
    };
    getMovieCast();
  }, [movieId]);
  const { cast } = movieCast;
  console.log(cast);
  return (
    <div>
      {cast?.length > 0 ? (
        <CastList movieCast={cast} />
      ) : (
        <p>Sorry we don't have any information about cast</p>
      )}
    </div>
  );
};

export default Cast;
