import FilmCard from "./FilmCard";
import Header from "./Header/index";
import Movies from "./Movies";
import "./styles.css";

function Home() {
  return (
    <div className="background">
      <Header />
      <FilmCard />
      <Movies />
    </div>
  );
}

export default Home;
