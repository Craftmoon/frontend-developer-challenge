import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div>
        <div className="heading-medium">uma seleção de produtos</div>
        <div className="heading-big">especial para você</div>
        <div className="heading-small">
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </div>
      </div>
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
