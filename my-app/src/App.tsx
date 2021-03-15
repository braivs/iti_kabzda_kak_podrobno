import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

/*
Есть два аккордиона.
Аккордион должен вернуть разметку либо с body, либо без body. Это определяется из вне.
Надо передать атрибут collapsed. Если true, то не должны увидеть accordionBody. Если collapsed = false, тогда
аккордион должен показать и title и body
*/

function App(props: any) {
  // полезное что-то
  // обязана вернуть JSX
  console.log("App rendering")
  return (
    <div>
      {/*<PageTitle title={"This is APP component!"}/>*/}
      {/*<PageTitle title={"My friends"}/>*/}
      {/*Article 1*/}
      {/*<Rating value={3}/>*/}
      <Accordion titleValue={"Menu"}/>
      {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}

      <Accordion titleValue={"Users"}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>

    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
