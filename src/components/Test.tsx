import React, {useState} from 'react';
import {v1} from 'uuid';
import {CitiesType, CityType, CountriesType} from '../types/entities';
import {Select} from './Select/Select';

export function Test() {

  const countryID_1 = v1();
  const countryID_2 = v1();
  const countryID_3 = v1();

  const countries: Array<CountriesType> = [
    {id: countryID_1, title: 'Индия'},
    {id: countryID_2, title: 'Нидерланды'},
    {id: countryID_3, title: 'Канада'}
  ]
  const cities: CitiesType = {
    [countryID_1]: [
      {id: v1(), title: 'Дели', pollution: 9879172},
      {id: v1(), title: 'Мумбай', pollution: 12691836},
      {id: v1(), title: 'Хайдарабад', pollution: 3597816}
    ],
    [countryID_2]: [
      {id: v1(), title: 'Амстердам', pollution: 869709},
      {id: v1(), title: 'Роттердам', pollution: 598199},
      {id: v1(), title: 'Гаага', pollution: 474292}
    ],
    [countryID_3]: [
      {id: v1(), title: 'Торонто', pollution: 6646488},
      {id: v1(), title: 'Монреаль', pollution: 4548254},
      {id: v1(), title: 'Калгари', pollution: 1888140}
    ]
  }

  //0 изменения массива в подходящий для селекта
  function arrFormat(arr: Array<CityType>) {
    return arr.map((x, index) => {
      return {value: index + 1, title: x.title}
    })
  }

  //дальше три разных фильтрации делаю и формировать массив объектов вида [{value, title}]
  //1. города принадлежат одной стране
  const oneCountryCities = arrFormat(cities[countryID_2])

  // объединённый массив со всеми городами
  let unityArray = [...cities[countryID_1], ...cities[countryID_2], ...cities[countryID_3]]
  // console.log(unityArray)
  //2. город кончается на И
  const IEndedCities = arrFormat(unityArray.filter(e => e.title[e.title.length - 1] === 'и'))

  //3. численность населения больше 3000000
  const over3MilCities = arrFormat(unityArray.filter(e => e.pollution > 3000000))
  console.log(over3MilCities)

  const [value1, setValue1] = useState(2)
  const [value2, setValue2] = useState(2)
  const [value3, setValue3] = useState(2)
  const [counter, setCounter] = useState(0);

  return <div className='flexHorizontal'>
    {counter}
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <Select onChange={setValue1}
            value={value1}
            items={oneCountryCities}/>
    <Select onChange={setValue2}
            value={value2}
            items={IEndedCities}/>
    <Select onChange={setValue3}
            value={value3}
            items={over3MilCities}/>
  </div>
}