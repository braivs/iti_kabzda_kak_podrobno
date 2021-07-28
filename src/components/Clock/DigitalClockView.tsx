import React from "react";
import {ClockViewPropsType, get2DigitsString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  return <>
    <span>{get2DigitsString(date.getHours())}</span>
    :
    <span>{get2DigitsString(date.getMinutes())}</span>
    :
    <span>{get2DigitsString(date.getSeconds())}</span>
  </>
}