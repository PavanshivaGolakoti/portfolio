import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { GiBrain } from 'react-icons/gi';
import { AiOutlinePhone } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setactive] = useState('#');
  return (
    <nav>
      <a
        onClick={() => setactive('#')}
        className={activeNav === '#' ? 'active' : ''}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactive('#ab')}
        className={activeNav === '#ab' ? 'active' : ''}
      >
        <HiOutlineUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setactive('#ex')}
        className={activeNav === '#ex' ? 'active' : ''}
      >
        <GiBrain />
      </a>
      <a
        href="#services"
        onClick={() => setactive('#se')}
        className={activeNav === '#se' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setactive('#co')}
        className={activeNav === '#co' ? 'active' : ''}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
};
export default Nav;
