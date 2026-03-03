import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageBanner from './index';

const sampleImage = {
  src: '/vercel.svg',
  alt: 'Background',
};

const meta = {
  title: 'Components/PageBanner',
  component: PageBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof PageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Welcome to Dropout Car Care',
    subtitle: 'Premium automotive services for your vehicle',
    backgroundImage: sampleImage,
    height: 320,
  },
};
