import React, {useEffect, useState} from 'react'; // 1

export default {
  title: 'useEffect demo',

}

export const Example1 = () => {
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