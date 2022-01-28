import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  document.title = "SportSee : Accueil";

  return (
    <div className="home">
      <div className="home__group">
        <img className="home__logo" src={logo} alt="logo" />
        <h1 className="home__title">Bienvenue</h1>
        <div className="home__users">
          <Link to="/12" className="home__user">
            Karl
          </Link>
          <Link to="/18" className="home__user">
            Cecilia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
