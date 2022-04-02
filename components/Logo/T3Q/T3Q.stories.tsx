import { ComponentStory, ComponentMeta } from '@storybook/react';
import { T3QLogo } from './T3Q';
import { setBoolean, setColor, setDesign, setRange } from '@/utils';
import { withDesign } from 'storybook-addon-designs'

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Logo / T3Q',
  component: T3QLogo,
  parameters: setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=22%3A264'),
  args: T3QLogo.defaultProps,
  argTypes: {
    width: setRange({
      min: 100,
      step: 5,
      max: 400,
    }),
    fill: setColor,
    half: setBoolean,
  },
} as ComponentMeta<typeof T3QLogo>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof T3QLogo> = (args) => <T3QLogo {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});

/* HALF --------------------------------------------------------------------- */

export const Half = Template.bind({});
Half.args = {
  half: true,
};

/* DARK --------------------------------------------------------------------- */

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  fill: '#fff',
};

/* DARK HALF ---------------------------------------------------------------- */

export const DarkHalf = Template.bind({});
DarkHalf.args = {
  ...Dark.args,
  half: true,
};

/* CUSTOM SIZE -------------------------------------------------------------- */

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 380,
};
