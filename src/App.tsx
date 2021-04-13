import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import OnOffUncontrolled from './components/OnOffUncontrolled/OnOffUncontrolled';
import OnOff from './components/OnOff/OnOff';

function App(props: any) {
  console.log('App rendering')

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [onOffStatus, setOnOffStatus] = useState<boolean>(true)

  return (
    <div className={'App'}>
      <Rating value={ratingValue}
              onClick={setRatingValue}/>
      <UncontrolledRating />
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
      <OnOffUncontrolled />
      <OnOff onOffStatus={onOffStatus} onClick={setOnOffStatus}/>
    </div>
  );
}

export default App;
