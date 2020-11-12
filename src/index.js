import GreetingPage from "./js/components/GreetingPage";
import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'Introducing Paul Dang';
 
ReactDOM.render(
  <GreetingPage />,
  document.getElementById('app')
);