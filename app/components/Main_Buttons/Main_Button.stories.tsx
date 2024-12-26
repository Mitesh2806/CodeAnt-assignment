import type { Meta, StoryObj } from '@storybook/react';
import Button_Main from './Main_Button';

const meta: Meta<typeof Button_Main> = {
  title: 'components/Button_Main',
  component: Button_Main,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof Button_Main>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
