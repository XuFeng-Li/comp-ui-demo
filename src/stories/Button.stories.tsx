import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/XFButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'XFButton.css',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'XFButton.css',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'XFButton.css',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'XFButton.css',
};
