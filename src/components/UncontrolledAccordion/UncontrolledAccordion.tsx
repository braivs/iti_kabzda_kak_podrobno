import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './reducer';

type AccordionPropsType = {
  titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering')
  let [state, dispatch] = useReducer(reducer, {collapsed: false});

  return <div>
    <AccordionTitle title={props.titleValue} onClick={() => {
      dispatch({type: TOGGLE_CONSTANT}) } }/>
    {!state.collapsed && <AccordionBody/>}
  </div>

}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering')
  return <h3 onClick={() => { props.onClick() } }>--{props.title}--</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return <ul>
    <li>1 gl</li>
    <li>2 hf</li>
    <li>3 hi</li>
  </ul>
}