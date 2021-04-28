import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: number // стартовое значение
  onChange: (value: any) => void // колбек при клике на значение
  items: ItemType[] //
  onClick: (value: any) => void
}

/*function SelectBody() => {
  return <div></div>
}*/

export function Select(props: SelectPropsType) {

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [currentValue, setCurrentValue] = useState<number>(props.value)

  let itemElements = props.items.map( (i, index) => (
    <div onClick={() => {
      props.onClick(i.value)
      setCurrentValue(i.value)
      }} key={index}>{i.title}</div>)
  )
  let currentItem = props.items.find(i => i.value === currentValue)

   return (
    <div>
      <div
        /* div в которой будет отображаться value. Текущее value.
        1.Какое текущее value?
          1.1 надо пробеждаться по всем items.
          1.2. Найти в этих items, тот с которым совпатает value.
          1.3. И отображать здесь нужный title, нужного items-а.
            Это можно сделать фильтрацией или find (лучше)
        */

        className={s.selectedItem}
        onClick={() => setCollapsed(!collapsed)}
        onBlur={() => setCollapsed(true)}>

        {currentItem && currentItem.title}
      </div>
      {}
      {/*{props.items.map( i => <div>{i.title}</div>)}*/}


    { /*
      Здесь если кликнули по нужной div надо её раскукожить, как аккордион.
      Здесь map-ом рисуем эти дивки
      В которых можно нажать вариант, который можно выбрать.
      */
      !collapsed && itemElements
    }
    </div>
  )
}



/*
* делаем контроллируемый элемент, но раскукоживание-скукоживание нет смысла контролировать нам самим.
* Селект должен ракукожиться, когда по нему кликнули, скукожиться должен когда кликнули снаружи - onBluer
* событие.
* Стилизация желатольна, по аналогии material ui
* */