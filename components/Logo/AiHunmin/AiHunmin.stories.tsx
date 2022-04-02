import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setColor, setDesign, setRange } from '@/utils';
import { AiHunminLogo } from './AiHunmin';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Logo / AiHunmin',
  component: AiHunminLogo,
  parameters: setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=36%3A3007'),
  args: AiHunminLogo.defaultProps,
  argTypes: {
    width: setRange({
      min: 100,
      step: 5,
      max: 400,
    }),
    fill: setColor,
  },
} as ComponentMeta<typeof AiHunminLogo>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof AiHunminLogo> = (args) => <AiHunminLogo {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});

/* DARK --------------------------------------------------------------------- */

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};

/* DARK MONO ---------------------------------------------------------------- */

export const DarkMono = Template.bind({});
DarkMono.args = {
  fill: '#fff',
  dark: true,
};

/* CUSTOM SIZE -------------------------------------------------------------- */

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 380,
};
