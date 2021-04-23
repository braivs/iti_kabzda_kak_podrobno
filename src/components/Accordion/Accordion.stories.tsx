import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  titleValue: 'Menu',
  collapsed: true,
  onChange: callback
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
  titleValue: 'Users',
  collapsed: false,
  onChange: callback
}

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)} />
};