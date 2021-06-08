import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = React.memo((props: AccordionPropsType) => {
  console.log('UncontrolledAccordion rendering')
  let [state, dispatch] = useReducer(reducer, {collapsed: false});

  return <div>
    <AccordionTitle title={props.titleValue} onClick={() => {
      dispatch({type: TOGGLE_COLLAPSED})
    }}/>
    {!state.collapsed && <AccordionBody/>}
  </div>

})

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = React.memo((props) => {
  console.log('AccordionTitle rendering')
  return <h3 onClick={() => {
    props.onClick()
  }}>--{props.title}--</h3>
})

const AccordionBody = React.memo(() => {
  console.log('AccordionBody rendering')
  return <ul>
    <li>1 gl</li>
    <li>2 hf</li>
    <li>3 hi</li>
  </ul>
})