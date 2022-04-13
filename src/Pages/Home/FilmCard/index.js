import "./styles.css";
import star from "../../../images/star.png";
import TimeCircle from "../../../images/svg/TimeCircle";

function FilmCard() {
  return (
    <div className="card-container">
      <div className="movie-gender">Ação</div>
      <div className="movie-rating">
        <div className="stars">
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
        </div>
        <div className="time-movie">
          <TimeCircle />
          <div> 1h59m </div>
        </div>
      </div>

      <div className="movie-name">BATMAN</div>
      <div className="movie-description">Um moguerço da pesada que vai se envolver em altas aventuras com essa galerinha da pesada de Gotham City</div>
      <button className="watch-button">Assistir agora</button>
    </div>
  );
}

export default FilmCard;
