import React, {useState} from 'react';

type AccordionPropsType = {
  titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('UncontrolledAccordion rendering')

  // const collapsed = false;
  let [collapsed, setCollapsed] = useState(false);

  return <div>
    <AccordionTitle title={props.titleValue}/>
    <button onClick={() => {setCollapsed(!collapsed)} }>TOGGLE</button>
    {!collapsed && <AccordionBody/>}
  </div>

}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>--{props.title}--</h3>
}

function AccordionBody() {
  return <ul>
    <li>1 gl</li>
    <li>2 hf</li>
    <li>3 hi</li>
  </ul>
}

export default UncontrolledAccordion;