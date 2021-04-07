import React from 'react';
import s from './OnOff.module.css'

type onOffType = {
  on : boolean
}

export function OnOff(props: onOffType) {
  let color;
  props.on ? color = s.green : color = s.red

  return <form>
      {props.on ? <button className={color}>on</button> : <button>on</button>}
      {props.on ? <button>off</button> : <button className={color}>off</button>}
      <div className={`${s.circle} ${color}`}></div>
    </form>
}