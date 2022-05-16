import "./styles.css";
import star from "../../../images/star.png";
import TimeCircle from "../../../images/svg/TimeCircle";

function FilmCard() {
  return (
    <div className="card-container">
      <div className="movie-gender">Ação</div>
      <div className="movie-rating">
        <div className="stars-filmcard">
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
      <div className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus neque. Cras sit amet ligula ut justo commodo porta id ut enim. Nulla est lectus, mollis sit amet vehicula id, volutpat eget mauris.</div>
      <button className="watch-button">Assistir agora</button>
    </div>
  );
}

export default FilmCard;
