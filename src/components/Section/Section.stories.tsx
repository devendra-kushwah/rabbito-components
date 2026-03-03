import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Section from './index';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
