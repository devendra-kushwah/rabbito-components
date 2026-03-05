import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import TextInput from './index';

const meta = {
  title: 'Components/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reusable wrapper around Ant Design Input that forwards all props and exposes TextArea/Search/Password variants.',
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <TextInput placeholder="Enter value" />
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <TextInput status="error" placeholder="Error" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <TextInput label="Full name" placeholder="Jane Doe" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ padding: 20, display: 'grid', gap: 12, maxWidth: 560 }}>
      <TextInput placeholder="Default input" />
      <TextInput.Search placeholder="Search here" onSearch={(v) => alert(`Search: ${v}`)} />
      <TextInput.TextArea rows={4} placeholder="Multiline" />
      <TextInput.Password placeholder="Password" />
    </div>
  ),
};
