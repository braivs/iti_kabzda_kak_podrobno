import React, {useEffect, useMemo, useState} from 'react';    // 1

export default {
  title: 'useEffect Briws',

}

export const Training = () => {
  const [testValue, setTestValue] = useState(1)

  console.log('testValue0: ' + testValue)


  useEffect(() => {
    const intervalID = setTimeout(() => {
      console.log('testValue: ' + testValue)
      setTestValue(testValue + 1)
    }, 1000)
    return () => {
      clearTimeout(intervalID)
    }
    }, [testValue])

  return <>
    test value with timeout: {testValue}
  </>
}

export const TrainingForClick = () => {
  return <>click me</>
}