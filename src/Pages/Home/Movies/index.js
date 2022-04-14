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
        <MovieCard poster={shangchi} category='Ação'  moviename='Shang Chi'/>
        <MovieCard poster={miranha} category='Ação'  moviename='Homem aranha'/>
        <MovieCard poster={loki} category='Ação'  moviename='Loki'/>
        <MovieCard poster={captainamerica} category='Ação'  moviename='Capitão América'/>
        <MovieCard poster={witcher} category='Ação'  moviename='The Witcher'/>
        
      </div>
    </div>
  );
}

export default Movies;
