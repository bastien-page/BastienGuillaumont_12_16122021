import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="home__group">
        <img className="home__logo" src={logo} alt="logo" />
        <h1 className="home__title">Bienvenue</h1>
        <div className="home__users">
          <div className="home__user">Utilisateur 1</div>
          <div className="home__user">Utilisateur 2</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
