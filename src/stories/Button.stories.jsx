import React from 'react';
import { Button } from './components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    handleClick: { action: "click event" }
  }
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({})
Red.args = {
  bgColor: 'red',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'md',
}
export const Green = Template.bind({})
Green.args = {
  bgColor: 'Green',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'md',
}
export const Blue = Template.bind({})
Blue.args = {
  bgColor: 'blue',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'md',
}

export const Black = Template.bind({})
Black.args = {
  bgColor: 'black',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  bgColor: 'black',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  bgColor: 'black',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  bgColor: 'black',
  fgColor: 'white',
  label: 'Click Me',
  type: 'Button',
  size: 'lg',
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  bgColor: 'black',
  fgColor: 'white',
  label: 'Click Me - This is a longer label to show how the button grows',
  type: 'Button',
  size: 'lg',
}

