import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {


  return (
    <header className="header">
      <h2>uma seleção de produtos</h2>
      <h1>especial para você</h1>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <div className="button-group">
        <button className="header-btn">Conheça a Linx</button>
        <button className="header-btn">Ajude o algorítimo</button>
        <button className="header-btn">Seus produtos</button>
        <button className="header-btn">Compartilhe</button>
      </div>
    </header>
  );

};

Header.propTypes = {};

export default Header;
