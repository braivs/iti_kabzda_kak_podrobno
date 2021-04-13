import React from 'react';

type PropsType = {
  onOffStatus : boolean
  onClick: (onOffStatus: boolean) => void
}

function OnOff(props: PropsType) {
  console.log('OnOff rendering')


  console.log('on: ' + props.onOffStatus)

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: props.onOffStatus ? "green" : "white"
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.onOffStatus ? "white" : "red"
  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.onOffStatus ? "green" : "red"
  };

  return <div>
    <div style={onStyle} onClick={ () => props.onClick(true)}>On</div>
    <div style={offStyle} onClick={ () => props.onClick(false)}>Off</div>
    <div style={indicatorStyle}/>
  </div>
}

export default OnOff;