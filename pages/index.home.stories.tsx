import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from '@/components';
import Home from './index';

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

export default {
  title: 'Pages / Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Home>;

/* -------------------------------------------------------------------------- */
/* TEMPLATE                                                                   */
/* -------------------------------------------------------------------------- */

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

/* BASE --------------------------------------------------------------------- */

export const Base = Template.bind({});
