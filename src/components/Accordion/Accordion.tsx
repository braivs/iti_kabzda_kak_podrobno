import React from 'react';

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean
  onChange: () => void
  /**
   * optional color of header text
   */
  color?: string
  items: ItemType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  const AccordionTitleMemo = React.memo(AccordionTitle)
  const AccordionBodyMemo = React.memo(AccordionBody)

  return <div>
    <AccordionTitleMemo title={props.titleValue}
                    color={props.color}
                    onChange={props.onChange}
    />
    {!props.collapsed && <AccordionBodyMemo items={props.items} onClick={props.onClick}/>}
  </div>

}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  color?: string
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering')
  return <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange() }>--{props.title}--</h3>
})

export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log('AccordionBody rendering')
  return <ul>
    { props.items.map( (i, index) => <li onClick={() => { props.onClick(i.value) }} key={index}>{i.title}</li>) }
  </ul>
}
