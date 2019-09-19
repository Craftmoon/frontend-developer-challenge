import React from "react";
import "./styles.css";

const ShareForm = () => {
  return (
    <article className="container-fluid text-center share-form-article">
      <h1>Compartilhe a novidade</h1>
      <h3 className="subtitle">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h3>
      <form name="message" method="post">
        <section className="share-form-section container-fluid">
          <div>
            <label>Nome do seu amigo:</label>
            <input
              type="text"
              name="name"
              pattern="[a-z A-Z]{1,99}"
              title="O nome deve conter somente letras"
              required
            />
          </div>

          <div>
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              title="Insira o e-mail no formato correto"
              required
            />
          </div>
        </section>
        <br />
        <button type="submit" value="Submit" className="more-products-button">
          Enviar agora
        </button>
      </form>
    </article>
  );
};

export default ShareForm;
