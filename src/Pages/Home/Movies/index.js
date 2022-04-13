import "./styles.css";
import captainamerica from "../../../images/capitao america.jpg";
import loki from "../../../images/loki.png";
import miranha from "../../../images/miranha.png";
import shangchi from "../../../images/shangchi.png";
import witcher from "../../../images/witcher.png";
import MovieCard from "../../../components/MovieCard";

function Movies() {
  return (
    <div>
      <div className="popular">Populares</div>
      <div className="movies-container">
        <MovieCard poster={shangchi} category='filme lixo' stars='estrela' moviename='shangchi'/>
        <MovieCard poster={miranha}/>
        <MovieCard poster={loki}/>
        <MovieCard poster={captainamerica}/>
        <MovieCard poster={witcher}/>
        
      </div>
    </div>
  );
}

export default Movies;
