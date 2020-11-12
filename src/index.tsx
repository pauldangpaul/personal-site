import GreetingPage from "./components/GreetingPage";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
const title = 'Introducing Paul Dang';
 
ReactDOM.render(
  <GreetingPage />,
  document.getElementById('app')
);