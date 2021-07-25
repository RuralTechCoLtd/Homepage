import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Team from './Team';
import './Top.scss';

const Top: React.FC = () => {
  return (
    <div className="Top">
      <Header />
      <div className="Top__hero-container">
        <img src="https://placehold.jp/1440x960.png" alt="heroImage" className="heroImage" />
        <div className="Top__icon">
          <h2>We will energize Japan from the rural areas.</h2>
          <h1>Rural Tech</h1>
        </div>
      </div>
      <About />
      <Services />
      <Team />
    </div>
  );
}

export default Top;
