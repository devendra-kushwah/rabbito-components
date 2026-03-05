import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, padding: 20, alignItems: 'center' }}>
      <Button color="default" variant="solid">Default</Button>
      <Button color="primary" variant="solid">Primary</Button>
      <Button color="default" variant="outlined">Outline</Button>
      <Button color="primary" variant="outlined">Primary Outline</Button>
      <Button color="default" variant="text">Text</Button>
      <Button loading color="primary" variant="solid">Loading</Button>
    </div>
  ),
};
