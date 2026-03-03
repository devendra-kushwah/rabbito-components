import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Gallery from './index';

const meta = {
  title: 'Components/Gallery',
  component: Gallery,
  tags: ['autodocs'],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
