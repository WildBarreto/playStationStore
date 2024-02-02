import jogo1 from "../../assets/bt-1.jpg";
import "./card.css";

function Card() {
  return (
    <>
      <div className="card">
        <article>
          <figure>
            <img src={jogo1} alt="cappuccino" />
            <h3>Battlefild 1</h3>
           <span>-30%</span>
            <h3>R$8,50</h3>
          </figure>
        </article>

        
      </div>
    </>
  );
}

export default Card;
