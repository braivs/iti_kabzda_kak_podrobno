import React from 'react';
import {Select, SelectPropsType} from './Select';
import {Story} from '@storybook/react';

export default {
  title: 'components/Select',
  component: Select,
}


/*const Template: Story<AccordionPropsType> = (args) => <Select {...args} />;
export const SelectStory = Template.bind({})*/



export const SelectStory: Story<SelectPropsType> = (args) => {
  return <Select {...args}  />
}

SelectStory.args = {
  value : 3,
  items: [
    {title: 'option 1', value: 1},
    {title: 'option 2', value: 2},
    {title: 'option 3', value: 3},
    {title: 'option 4', value: 4}
  ]
}

/*export const SelectStory: Story = (args) => {
  return <Select />
}*/
// export const SelectStory = SelectStory1.bind({})
