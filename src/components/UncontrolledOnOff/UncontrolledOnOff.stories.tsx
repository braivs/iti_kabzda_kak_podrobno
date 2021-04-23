import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
  title: 'UncontrolledOnOff stories',
  component: UncontrolledOnOff,
}

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(false)
  value.toString()
  return (
    <div>
      <UncontrolledOnOff onChange={setValue}/> {value.toString()}
    </div>
  )
}

