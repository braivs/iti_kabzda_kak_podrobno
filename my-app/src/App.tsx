import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

/* Задание: Сделать такой же title для компоненты Accordion. Обратить внимание Accordion состоит из двух частей.
 Передать props-ы c title заголовком. Важный момент: title попадёт в Accordion но title самому Accordion не нужен.
 Он должен взять этот title и передать дальше в AccordionTitle. А AccordionTitle поставит его уже между h3

 */

function App() {
  // полезное что-то
  // обязана вернуть JSX
  console.log("App rendering")
  return (
    <div>
      <PageTitle title={"This is APP component!"}/>
      <PageTitle title={"My friends"}/>
      Article 1
      <Rating value={3}/>
      <Accordion />
      <Accordion />
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>

    </div>
  );
}

function PageTitle(props: any) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
