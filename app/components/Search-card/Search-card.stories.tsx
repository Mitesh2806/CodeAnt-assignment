import type { Meta, StoryObj } from '@storybook/react';
import SearchCard from './Search-card';

const meta: Meta<typeof SearchCard> = {
  title: 'components/SearchCard',
  component: SearchCard,
  parameters: {
    layout: 'centered', // Centers the card in the Storybook canvas
  },
};

export default meta;

type Story = StoryObj<typeof SearchCard>;

export const Default: Story = {
  args: {
    // Define any props required by your `Signin_Card_1` component here
    // For example:
    // title: 'Default Title',
    // description: 'This is a default card description.',
  },
};
