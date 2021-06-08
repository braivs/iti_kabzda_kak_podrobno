import React from 'react';
import './App.css';
import {Test} from './components/Test';

function App(props: any) {
  // console.log('App rendering')

  /*let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)*/

  return (
    <div className={'App'}>
      {/*<Rating value={ratingValue}*/}
      {/*        onClick={setRatingValue}/>*/}
      {/*<UncontrolledRating />*/}
      {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                 onChange={() => {setAccordionCollapsed(!accordionCollapsed)} }/>*/}

      {/*<OnOff on={switchOn} onChange={ setSwitchOn }/>*/}
      {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
      {/*<UncontrolledAccordion titleValue={'bla'} />*/}

      <Test />
    </div>
  );
}

export default App;
