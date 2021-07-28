import React, {useEffect, useState} from 'react'; // 1

export default {
  title: 'Clock by Briws',

}

const returnTime = () => {
  let a = new Date()
  return a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
}

export const ClockBriws = () => {

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