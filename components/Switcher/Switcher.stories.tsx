import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switcher } from './Switcher';
import { setBoolean, setDesign, setRange } from '@/utils';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Switcher',
  component: Switcher,
  parameters: setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=36%3A1139'),
  args: Switcher.defaultProps,
  argTypes: {
    on: setBoolean,
    darkTheme: setBoolean,
    scale: setRange({
      min: 1,
      step: 0.1,
      max: 4,
    }),
  },
} as ComponentMeta<typeof Switcher>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof Switcher> = (args) => <Switcher {...args} />;

/* OFF ---------------------------------------------------------------------- */

export const Off = Template.bind({});
Off.args = {
  labels: {
    on: '라이트 테마로 전환',
    off: '다크 테마로 전환',
  },
};

/* ON ----------------------------------------------------------------------- */

export const On = Template.bind({});

On.args = {
  on: true,
  ...Off.args,
};

/* CUSTOM SIZE -------------------------------------------------------------- */

export const CustomSize = Template.bind({});

CustomSize.args = {
  ...Off.args,
  scale: 2,
};
