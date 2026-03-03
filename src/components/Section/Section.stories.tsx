import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Section from './index';

const sampleChildren = (
  <div>
    <p>This is sample content for the section. Replace with your real content.</p>
  </div>
);

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    children: sampleChildren,
    titleAlign: 'center',
    fluid: false,
  },
};
