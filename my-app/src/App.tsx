import React from 'react';
import './App.css';

function hello() {
  debugger;
  alert('Hello Briws');
}

function App() {
  // полезное что-то
  // обязана вернуть JSX
  console.log("App rendering")
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering")
  return <>This is APP component!</>
}

function Rating() {
  console.log("Rating rendering")
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  )
}

function Star() {
  console.log("star rendering")
  return <div>* Star *</div>
}

function Accordion() {
  return <div>
    <h3>Меню</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}

export default App;
