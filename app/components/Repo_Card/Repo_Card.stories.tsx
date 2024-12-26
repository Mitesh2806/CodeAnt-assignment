import type { Meta, StoryObj } from '@storybook/react';
import Repo_Card from './Repo_Card';

const meta: Meta<typeof Repo_Card> = {
  title: 'components/Repo_Card',
  component: Repo_Card,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof Repo_Card>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
