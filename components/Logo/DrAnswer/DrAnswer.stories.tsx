import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DrAnswerLogo } from './DrAnswer';
import { setColor, setDesign, setRange } from '@/utils';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Logo / DrAnswer',
  component: DrAnswerLogo,
  parameters: setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=89%3A11307'),
  args: DrAnswerLogo.defaultProps,
  argTypes: {
    fill: setColor,
    width: setRange({
      min: 100,
      step: 5,
      max: 400,
    }),
  },
} as ComponentMeta<typeof DrAnswerLogo>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof DrAnswerLogo> = (args) => <DrAnswerLogo {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});

/* DARK --------------------------------------------------------------------- */

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  fill: '#fff',
};

/* CUSTOM SIZE -------------------------------------------------------------- */

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 380,
};
