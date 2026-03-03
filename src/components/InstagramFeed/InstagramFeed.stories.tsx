import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InstagramFeed from './index';

const meta = {
  title: 'Components/InstagramFeed',
  component: InstagramFeed,
  tags: ['autodocs'],
} satisfies Meta<typeof InstagramFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
