import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Headersoci = () => {
  return (
    <div className="header__soci">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub size={30} />
      </a>
      <a href="https://twitter.com" target="_blank">
        <AiFillTwitterCircle size={36} />
      </a>
    </div>
  );
};
export default Headersoci;
