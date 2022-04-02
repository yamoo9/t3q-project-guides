import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setDesign } from '@/utils';
import { Layout } from './Layout';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Template / Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    ...setDesign('https://www.figma.com/file/LsmvmbzKIxUE1K3eOw48KO/%EB%94%94%EC%9E%90%EC%9D%B8-%EB%AA%A9%EC%97%85?node-id=36%3A521')
  },
} as ComponentMeta<typeof Layout>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});
