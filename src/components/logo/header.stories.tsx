import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HeaderLogo from './header';

const meta = {
  title: 'Components/Logo/Header',
  component: HeaderLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
