import React from 'react';
import headshot from '../asse';

const Home = () => {
  return (
    <section id="home" className="py-5">
      <div className="container text-center">
        <h1>Nick Ncube</h1>
        <img src={headshot} alt="Nick Ncube" className="img-fluid rounded-circle mb-3" />
        <p>My name is Nick Ncube and I am a front-end developer student. This is my final project. Welcome to my portfolio webpage.</p>
      </div>
    </section>
  );
}

export default Home;