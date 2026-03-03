import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Video from './index';

// public sample video for story rendering
const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

const meta = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: sampleVideo,
    poster: '/vercel.svg',
    controls: true,
    width: 640,
    height: 360,
  },
};
