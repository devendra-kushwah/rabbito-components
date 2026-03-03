import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Map from './index';

const meta = {
  title: 'Components/Map',
  component: Map,
  tags: ['autodocs'],
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
