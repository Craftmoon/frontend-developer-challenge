import React from "react";

const ShareForm = () => {
  return (
    <article className="share-form-article">
      <h1>Compartilhe a novidade</h1>
      <h3 className="subtitle">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h3>
      <form name="message" method="post" className="share-product-form">
        <section className="form-inline">
          <div>
            <label className="share-form-label">Nome do seu amigo:</label>
            <input
              className="share-form-input"
              type="text"
              name="name"
              pattern="[A-Za-zÀ-ú ']{1,99}"
              title="O nome deve conter somente letras"
              required
            />
          </div>
          <div>
            <label className="share-form-label">E-mail:</label>
            <input
              className="share-form-input"
              type="email"
              name="email"
              title="Insira o e-mail no formato correto"
              required
            />
          </div>
        </section>
        <button type="submit" value="Submit" className="article-end-button">
          Enviar agora
        </button>
      </form>
    </article>
  );
};

export default ShareForm;
