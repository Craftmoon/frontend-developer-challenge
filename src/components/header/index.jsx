import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <hgroup>
        <h3 className="heading-medium">uma seleção de produtos</h3>
        <h1 className="heading-big">especial para você</h1>
        <h5 className="heading-small">
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h5>
      </hgroup>
      <nav>
        <button>Conheça a Linx</button>
        <button>Ajude o Algoritmo</button>
        <button>Seus produtos</button>
        <button>Compartilhe</button>
      </nav>
    </header>
  );
};

export default Header;
