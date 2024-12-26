import type { Meta, StoryObj } from '@storybook/react';
import Signin_Card_Main from './Main_Signin_Card';

const meta: Meta<typeof Signin_Card_Main> = {
  title: 'components/Signin_Card_Main',
  component: Signin_Card_Main,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof Signin_Card_Main>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
