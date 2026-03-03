import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SocialLinks from './index';

const meta = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
