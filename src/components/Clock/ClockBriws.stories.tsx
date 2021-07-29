import React from 'react';
import {DigitalViewBriws} from "./DigitalViewBriws";
import {ClockBriws} from "./ClockBriws";

export default {
  title: 'Clock Briws',
  component: DigitalViewBriws,

}

export const Digital = () => {
  return <ClockBriws mode='digital'/>
}

export const Analog = () => {
  return <ClockBriws mode='analog'/>
}
