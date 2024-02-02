import "./App.css";
import capa from "./assets/capa-a-playstation-store-psn-finalmente-implementa-um-recurso-altamente-solicitado.jpg";
import logo from "./assets/ps-logo.png";
import Card from "./components/card/Card";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <img src={logo} alt="" className="logo" />
      <Menu />
      <img src={capa} alt="" className="capa" />
      <h1>Ofertas</h1>
      <section>
        <aside>
          <h2>Informações Adicionais</h2>
          <p>
            Este é o espaço para informações adicionais sobre o catalogo de
            jogos, promoções, noticias, etc.
          </p>
        </aside>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}

export default App;
