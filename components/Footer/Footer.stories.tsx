import { setDesign } from '@/utils';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Template / Footer',
  component: Footer,
  // 컴포넌트 파라미터 설정
  // 참고: https://storybook.js.org/docs/react/configure/story-layout
  parameters: {
    layout: 'fullscreen',
    ...setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=31%3A930')
  },
} as ComponentMeta<typeof Footer>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});
