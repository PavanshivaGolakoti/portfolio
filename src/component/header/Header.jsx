import React from 'react';
import './header.css';
import CTA from './CTA';
import Headersoci from './Headersoci';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pavan Shiva</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          ScrollDown
        </a>
        <Headersoci />
        <div className="me">
          <img
            src="https://avatars.githubusercontent.com/u/85618911?s=4u=570ad96566d9e6035b2136b8d1f031c0c9730a43v=4"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
