import "./styles.css";
import Starfill from "../../images/starfill.png";

function MovieCard({ poster, category, moviename }) {
  return (
    <div className="movie-card">
      <img className="image" src={poster} />
      <div className="info-wrapper">
        <div> {category} </div>
        <div className="stars">
          <img src={Starfill} />
          <img src={Starfill} />
          <img src={Starfill} />
          <img src={Starfill} />
          <img src={Starfill} />
        </div>

        <div> {moviename} </div>
      </div>
    </div>
  );
}

export default MovieCard;
