import { setDesign } from '@/utils';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Template / Header',
  component: Header,
  // 컴포넌트 파라미터 설정
  // 참고: https://storybook.js.org/docs/react/configure/story-layout
  parameters: {
    layout: 'fullscreen',
    ...setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=33%3A585')
  },
} as ComponentMeta<typeof Header>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});
