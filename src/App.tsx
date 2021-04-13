import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';

function App(props: any) {
  console.log('App rendering')

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className={'App'}>
      <Rating value={ratingValue}
              onClick={setRatingValue}/>
      <UncontrolledRating />
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                 onChange={() => {setAccordionCollapsed(!accordionCollapsed)} }/>

      <OnOff on={switchOn} onChange={ setSwitchOn }/>
    </div>
  );
}

export default App;
