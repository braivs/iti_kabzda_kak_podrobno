import React from "react";

function Accordion() {
  console.log("Accordion rendering")
  return <div>
    <AccordionTitle/>
    {/*надо будет сделать
    <AccordionTitle title={props.title}/>
    */}
    <AccordionBody/>
  </div>
}

function AccordionTitle() {
  console.log("AccordionTitle rendering")
  return <h3>Меню my</h3>
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