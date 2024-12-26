import type { Meta, StoryObj } from '@storybook/react';
import Signin_Card_2 from './Signin_Card_2';

const meta: Meta<typeof Signin_Card_2> = {
  title: 'components/Signin_Card_2',
  component: Signin_Card_2,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof Signin_Card_2>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
