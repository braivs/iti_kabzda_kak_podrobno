import React from 'react';

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: RatingPropsType) {

  return (
    <div> //общая div
      <div>{}</div>
      {/* div в которой будет отображаться value. Текущее value.
        1.Какое текущее value?
          1.1 надо пробеждаться по всем items.
          1.2. Найти в этих items, тот с которым сопдатает value.
          1.3. И отображать здесь нужный title, нужного items-а.
            Это можно сделать фильтрацией или find
        */}
      {props.items.map( i => <div>{i.title}</div>)}
    {/*
      Здесь если кликнули по нужной div надо её раскукожить, как аккордион.
      Здесь map-ом рисуем эти дивки
      В которых можно нажать вариант, который можно выбрать.
    */}
    </div>
  )
}

/*
* делаем контроллируемый элемент, но раскукоживание-скукоживание нет смысла контролировать нам самим.
* Селект должен ракукожиться, когда по нему кликнули, скукожиться должен когда кликнули снаружи - onBluer
* событие.
* Стилизация желатольна, по аналогии material ui
* */