import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageBanner from './index';

const meta = {
  title: 'Components/PageBanner',
  component: PageBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof PageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
