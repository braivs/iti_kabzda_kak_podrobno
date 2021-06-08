import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
  title: 'OnOff',
  component: OnOff,
}

const callback = action('on or off clicked');

const OnOffMemo = React.memo(OnOff)

export const OnMode = () => <OnOffMemo on={true} onChange={callback}/>;
export const OffMode = () => <OnOffMemo on={false} onChange={callback}/>;

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff on={value} onChange={setValue} />
};