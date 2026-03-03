import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Video from './index';

const meta = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
