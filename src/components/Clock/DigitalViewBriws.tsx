import React, {useEffect, useState} from 'react'; // 1

const get2DigitsString = (num: number) => num < 10 ? '0' + num : num

const returnTime = () => {
  let a = new Date()
  return get2DigitsString(a.getHours()) + ':' + get2DigitsString(a.getMinutes()) + ':' + get2DigitsString(a.getSeconds())
}

export const DigitalViewBriws = () => {

  const [counter, setCounter] = useState<string>(returnTime());

  useEffect(() => {

    const intervalID = setInterval(() => {
      setCounter(returnTime)
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  },[])



  return <>
    time: {counter}
  </>
}