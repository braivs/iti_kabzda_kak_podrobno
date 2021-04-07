import React from "react";

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering")
    return <div>
      <AccordionTitle title={props.titleValue}/>
      { !props.collapsed && <AccordionBody/> }
    </div>

}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")
  return <h3>--{props.title}--</h3>
}

function AccordionBody() {
  console.log("AccordionBody rendering")
  return <ul>
    <li>1 gl</li>
    <li>2 hf</li>
    <li>3</li>
  </ul>
}

export default Accordion;