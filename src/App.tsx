import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App(props: any) {
  console.log('App rendering')

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  return (
    <div className={'App'}>

      <Rating value={ratingValue}
              onClick={setRatingValue}/>

      <UncontrolledRating />

    </div>
  );
}

export default App;
