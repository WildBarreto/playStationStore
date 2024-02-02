import "./News.css";

function News() {
  return (
    <div className="news">
      <h2>Assine nossa </h2>
      <h5>Receba as ultimas noticias e atualizações na sua caixa de entrada</h5>

      <form action="">
        <label htmlFor="">
          Nome: 
          <input type="text" />
        </label>
        <label htmlFor="">
          E-mail:<input type="email" />
        </label>
        <label htmlFor="">
          <input type="checkbox" /> Sim, desejo receber e-mails com as ultimas noticias e atualizações
        </label>

        <button type="submit">
          Assinar
        </button>
      </form>
    </div>
  );
}

export default News;
