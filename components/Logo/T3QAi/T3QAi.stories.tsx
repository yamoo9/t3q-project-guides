import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setBoolean, setColor, setDesign, setRange } from '@/utils';
import { T3QAiLogo } from './T3QAi';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Logo / T3QAi',
  component: T3QAiLogo,
  parameters: setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=36%3A2958'),
  args: T3QAiLogo.defaultProps,
  argTypes: {
    width: setRange({
      min: 100,
      step: 5,
      max: 400,
    }),
    fill: setColor,
    withCloud: setBoolean,
  },
} as ComponentMeta<typeof T3QAiLogo>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof T3QAiLogo> = (args) => <T3QAiLogo {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});

/* WITH CLOUD --------------------------------------------------------------- */

export const WithCloud = Template.bind({});
WithCloud.args = { withCloud: true };

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

/* DARK WITH CLOUD ---------------------------------------------------------- */

export const DarkWithCloud = Template.bind({});
DarkWithCloud.args = {
  withCloud: true,
  dark: true,
};

/* DARK WITH CLOUD MONO ----------------------------------------------------- */

export const DarkWithCloudMono = Template.bind({});
DarkWithCloudMono.args = {
  fill: '#fff',
  withCloud: true,
  dark: true,
};

/* CUSTOM SIZE -------------------------------------------------------------- */

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 380,
};
