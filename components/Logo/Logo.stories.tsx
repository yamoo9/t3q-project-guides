import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './Logo';

/* 스토리 구성 ------------------------------------------------------------------- */

export default {
  title: 'global/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

/* 컴포넌트 템플릿 ----------------------------------------------------------------- */

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: '#f00',
  background: '#000',
};
