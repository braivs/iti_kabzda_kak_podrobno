import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';

function App(props: any) {
  console.log('App rendering')

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let [accordionCollapsed, setAccordianCollapsed] = useState<boolean>(true)


  return (
    <div className={'App'}>

      <Rating value={ratingValue}
              onClick={setRatingValue}/>

      <UncontrolledRating />
      
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} />

    </div>
  );
}

export default App;
