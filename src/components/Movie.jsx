const Movie = ({ title, director, IMDBRating }) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Director: {director}</p>
      <p>Rating: {IMDBRating}</p>
    </div>
  );
};

export default Movie;
