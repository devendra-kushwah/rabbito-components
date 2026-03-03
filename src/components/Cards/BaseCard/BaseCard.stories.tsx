import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BaseCard from './index';

const meta = {
  title: 'Components/Cards/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card content here',
  },
};
