import * as React from 'react';
import { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import * as constructionSign from '../assets/under-construction.svg';

const HomePage = () => {

  useEffect(() => {
    makeAnAlert();
  }, []);

  return (
    <div className="container">
      <div>
        Introducing
      </div>
      <div>
        Paul Dang
      </div>
      <div>
        Web Developer Extraordinaire
      </div>
      <div>
        (site currently under construction)
        <img src={constructionSign} alt="Under Construction Sign" />       
      </div>
      <div>
        <i>Please check back at a later time.</i>
      </div>
    </div>
  )
}

function makeAnAlert() {
  console.log("blah");
}

export default HomePage;