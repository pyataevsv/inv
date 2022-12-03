import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../components/common/Checkbox';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms',
  component: Checkbox,
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const _Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Checkbox.args = {
  checked: true,
  labelTxt: 'Checkbox',
};
