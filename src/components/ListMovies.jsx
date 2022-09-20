import { useState } from "react";
import Movie from "./Movie";

const ListMovies = ({ movies }) => {
  /**
   *  Init state con movies
   *  const [initMovies, setInitMovies] = useState(movies);
   */
  const [initMovies, setInitMovies] = useState([]);

  const deleteMovie = (id) => {
    const newMovies = initMovies.filter((movie) => movie._id !== id);
    setInitMovies(newMovies);
  }
  const addMovie = () => {
    const newMovies = [...initMovies];
    newMovies.push(movies[0]);
    setInitMovies(newMovies);
  }

  return (
    <div>
      {initMovies.map((movie) => {
        return (
          <div key={movie._id}>
            <Movie
              title={movie.title}
              director={movie.director}
              IMDBRating={movie.IMDBRating}
            />
            <button onClick={() => {deleteMovie(movie._id)}}>Delete Movie</button>
          </div>
        );
      })}
      <button onClick={addMovie} >Add Movie</button>
    </div>
  );
};

export default ListMovies;
