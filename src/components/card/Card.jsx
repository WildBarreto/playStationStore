//import jogo1 from "../../assets/bt-1.jpg";
import "./card.css";

const Card = (props) =>{
  return (
    <>
      <div className="card">
        <article>
          <figure>
            <img src={props.image} alt="cappuccino" />
            <h3>{props.nome}</h3>
            <span className="desconto">-30%</span>
            <h3>{props.preco}</h3>
          </figure>
        </article>
      </div>
    </>
  );
}

export default Card;
