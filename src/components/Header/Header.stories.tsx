import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MainHeader from './index';

const meta = {
  title: 'Components/MainHeader',
  component: MainHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof MainHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
