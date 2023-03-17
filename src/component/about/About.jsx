import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineFolderView } from 'react-icons/ai';
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png?w=681&h=383&crop=1 
"
              height="390px"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years work</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderView className="about__icon" />
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
          </div>
          <p>
            Avatar (marketed as James Cameron's Avatar) is a 2009 epic science
            fiction film directed, written, co-produced, and co-edited by James
            Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang,
            Michelle Rodriguez,[6] and Sigourney Weaver.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
