import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import WhatsAppChat from './index';

const meta = {
  title: 'Components/WhatsAppChat',
  component: WhatsAppChat,
  tags: ['autodocs'],
} satisfies Meta<typeof WhatsAppChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
