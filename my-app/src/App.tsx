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

function AccordionTitle() {
  return <h3>Меню my</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1 gl</li>
      <li>2 hf</li>
      <li>3</li>
    </ul>
  )
}

function Accordion() {
  return <div>
    <AccordionTitle />
    <AccordionBody />
  </div>
}

export default App;
