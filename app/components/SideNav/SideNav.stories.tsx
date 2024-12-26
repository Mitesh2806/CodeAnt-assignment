import type { Meta, StoryObj } from '@storybook/react';
import SideNav from './SideNav';

const meta: Meta<typeof SideNav> = {
  title: 'components/SideNav',
  component: SideNav,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
