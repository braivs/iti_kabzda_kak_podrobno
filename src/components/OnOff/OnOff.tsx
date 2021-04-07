import React from 'react';
import s from './OnOff.module.css'

type onOffType = {
  on : boolean
}

export function OnOff(props: onOffType) {
  let color;
  props.on ? color = s.green : color = s.red
  if (props.on) {
    return <form>
      <button className={color}>on</button>
      <button>off</button>
      <div className={`${s.circle} ${color}`}></div>
    </form>
  } else {
    return <form>
      <button>on</button>
      <button className={color}>off</button>
      <div className={`${s.circle} ${color}`}></div>
    </form>
  }

}

