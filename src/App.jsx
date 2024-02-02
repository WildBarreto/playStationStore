import "./App.css";
import capa from "./assets/capa-a-playstation-store-psn-finalmente-implementa-um-recurso-altamente-solicitado.jpg";
import logo from "./assets/ps-logo.png";
import Card from "./components/card/Card";
import Footer from "./components/footer/Foorter";
import Menu from "./components/menu/Menu";
import News from "./components/news/News";
import Sobre from "./components/sobre/Sobre";

import jogo6 from "./assets/ac-cover.jpg";
import jogo1 from "./assets/bt-1.jpg";
import jogo4 from "./assets/bt-4.jpg";
import jogo5 from "./assets/bt-5.jpg";
import jogo2 from "./assets/bt-bad-company-2.jpg";
import jogo3 from "./assets/bt-hardline.jpg";

function App() {
  return (
    <>
      <img src={logo} alt="" className="logo" />
      <Menu />
      <img src={capa} alt="" className="capa" />
      <h1>Ofertas</h1>
      <section className="sectioncards">
        <aside>
          <h2>Informações Adicionais</h2>
          <p>
            Este é o espaço para informações adicionais sobre o catalogo de
            jogos, promoções, noticias, etc.
          </p>
        </aside>
        <div className="cards">
          <Card image={jogo1} nome="Battlefild 1" preco="R$5,00"/>
          <Card image={jogo2} nome="Battlefild 2" preco="R$5,00"/>
          <Card image={jogo3} nome="Battlefild 3" preco="R$5,00"/>
          <Card image={jogo4} nome="Battlefild 4" preco="R$5,00"/>
          <Card image={jogo5} nome="Battlefild 5" preco="R$5,00"/>
          <Card image={jogo6} nome="Assasin's Creed" preco="R$5,00"/>
        </div>
      </section>

      <Sobre />
      <News />
      <Footer />
    </>
  );
}

export default App;
