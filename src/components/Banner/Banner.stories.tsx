import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Banner from './index';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Hero Title',
    subtitle: 'Short subtitle',
    imageSrc: '/public/placeholder.png',
    imageAlt: 'Banner image',
  },
};
