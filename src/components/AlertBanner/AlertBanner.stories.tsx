import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AlertBanner from './index';

const meta = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'This is an alert',
    description: 'Helpful description text',
    type: 'info',
  },
};
