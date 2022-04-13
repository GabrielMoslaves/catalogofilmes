import "./styles.css";
import Kenai from "../../../images/Kenai.png";
import bell from "../../../images/bell.png";
import search from "../../../images/search.png";
import user from "../../../images/user.png";
import Text from "../../../components/Text";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <img src={Kenai} />
        </div>
        <div className="header-right">
          <img src={search} />
          <div>Início</div>
          <div>Minha lista</div>
          <img src={bell} />
          <img src={user} />
        </div>
      </div>
    </div>
  );
}

export default Header;
