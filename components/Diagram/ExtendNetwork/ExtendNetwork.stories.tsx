import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExtendNetwork } from './ExtendNetwork';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Components / Diagram / ExtendNetwork',
  component: ExtendNetwork,
  args: ExtendNetwork.defaultProps,
} as ComponentMeta<typeof ExtendNetwork>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof ExtendNetwork> = (args) => (
  <ExtendNetwork {...args} />
);

/* MOBILE ------------------------------------------------------------------- */

export const Mobile = Template.bind({});

/* MOBILE DARK -------------------------------------------------------------- */

export const MobileDark = Template.bind({});
MobileDark.args = {
  dark: true,
};

/* MOBILE CONTRAST ---------------------------------------------------------- */

export const MobileContrast = Template.bind({});
MobileContrast.args = {
  hiContrast: true,
};

/* MOBILE DARK CONTRAST ----------------------------------------------------- */

export const MobileDarkContrast = Template.bind({});
MobileDarkContrast.args = {
  dark: true,
  hiContrast: true,
};

/* DESKTOP ------------------------------------------------------------------- */

export const Desktop = Template.bind({});
Desktop.args = {
  mode: 'desktop',
};

/* DESKTOP DARK -------------------------------------------------------------- */

export const DesktopDark = Template.bind({});
DesktopDark.args = { 
  mode: 'desktop', 
  dark: true 
};

/* DESKTOP CONTRAST ---------------------------------------------------------- */

export const DesktopContrast = Template.bind({});
DesktopContrast.args = {
  mode: 'desktop',
  hiContrast: true,
};

/* DESKTOP DARK CONTRAST ----------------------------------------------------- */

export const DesktopDarkContrast = Template.bind({});
DesktopDarkContrast.args = {
  mode: 'desktop',
  dark: true,
  hiContrast: true,
};
