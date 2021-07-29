import React, {useEffect, useState} from 'react';
import {DigitalViewBriws} from "./DigitalViewBriws";
import {AnalogViewBriws} from "./AnalogViewBriws/AnalogViewBriws"; // 1

export const get2DigitsString = (num: number) => num < 10 ? '0' + num : num

type PropsType = {
  mode: 'digital' | 'analog'
}

export const ClockBriws: React.FC<PropsType> = (props) => {
  switch (props.mode) {
    case 'digital': return <DigitalViewBriws />
    case 'analog': return <AnalogViewBriws />
    default: return <>'no mode selected'</>
  }
}