import React, {useEffect, useState} from 'react'; // 1

export default {
  title: 'useEffect demo',

}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1);

  console.log('SimpleExample');

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString();
  })

  useEffect(() => {
    console.log('useEffect only first render (copmonentDidMount)')
    document.title = counter.toString();
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString();
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button>
  </>
}

export const SetTimeoutExample = () => {

  const returnTime = () => {
    let a = new Date()
    return a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
  }

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState<string>(returnTime());

  console.log('SetTimeoutExample');



  useEffect(() => {

    setInterval(() => {
      setCounter(returnTime)
    }, 1000)

  },[])



  return <>
    Hello, time: {counter} - fake: {fake}
    {/*<button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
  </>
}