import React from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';

function App(props: any) {
  // полезное что-то
  // обязана вернуть JSX
  console.log('App rendering')
  return (
    <div className={'App'}>
      <OnOff />

      <UncontrolledAccordion titleValue={'Menu'}/>
      <Accordion titleValue={'Menu'} collapsed={false} />

      <UncontrolledRating />

      {/*<Rating value={3} />*/}

    </div>
  );
}

export default App;
