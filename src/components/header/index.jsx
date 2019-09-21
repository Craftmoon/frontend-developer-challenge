import React from "react";

const Header = () => {
  return (
    <header>
      <hgroup>
        <div className="heading-medium">uma seleção de produtos</div>
        <div className="heading-big">especial para você</div>
        <div className="heading-small">
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </div>
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
