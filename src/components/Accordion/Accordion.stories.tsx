import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
  table: {
    category: categoryName
  }
})

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('Color')
    },
    onChange: {
      ...GetCategoryObj('Event')
    },
    collapsed: {...GetCategoryObj('Main')},
    titleValue: {...GetCategoryObj('Main')}
  }
}

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbackProps = {
  onChange: callback
}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbackProps,
  titleValue: 'Menu',
  collapsed: true,
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
  ...callbackProps,
  titleValue: 'Users',
  collapsed: false,
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
};
ModeChanging.args = {
  titleValue: 'Users'
}