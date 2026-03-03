import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import FooterLogo from './footer';

const meta = {
  title: 'Components/Logo/Footer',
  component: FooterLogo,
  tags: ['autodocs'],
} satisfies Meta<typeof FooterLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
