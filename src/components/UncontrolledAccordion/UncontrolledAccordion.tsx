import React from "react";

type AccordionPropsType = {
  titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion rendering")

  const collapsed = false;

    return <div>
      <AccordionTitle title={props.titleValue}/> <button>TOGGLE</button>
      { !collapsed && <AccordionBody/> }
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
    <li>3 hi</li>
  </ul>
}

export default UncontrolledAccordion;