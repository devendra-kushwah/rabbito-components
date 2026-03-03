import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DetailedCard from './index';

const meta = {
  title: 'Components/Cards/DetailedCard',
  component: DetailedCard,
  tags: ['autodocs'],
} satisfies Meta<typeof DetailedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Detailed Card',
    subTitle: 'Subtitle',
    description: 'Detailed description here',
  },
};
