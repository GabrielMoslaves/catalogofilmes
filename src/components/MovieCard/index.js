import "./styles.css";

function MovieCard({ poster, category, stars, moviename }) {
  return (
    <div className="movie-card">
      <img src={poster} />
      <div>
        <div> {category} </div>
        <div> {stars} </div>>
        <div> {moviename} </div>
      </div>
    </div>
  );
}

export default MovieCard;
