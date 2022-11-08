import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonDialog } from '../components/ButtonDialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonDialog',
  component: ButtonDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonDialog> = (args) => <ButtonDialog {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};
