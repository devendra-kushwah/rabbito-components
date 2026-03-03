import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Gallery from './index';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/Gallery',
  component: Gallery,
  tags: ['autodocs'],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=80', alt: 'Car 1' },
      { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', alt: 'Car 2' },
      { src: 'https://images.unsplash.com/photo-1516728778615-2d590ea1856f?w=800&q=80', alt: 'Car 3' },
    ],
    columns: 3,
    gap: 12,
    onImageClick: fn(),
  },
};
