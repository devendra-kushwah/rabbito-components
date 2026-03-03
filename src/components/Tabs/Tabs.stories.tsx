import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from './index';

const sampleItems = [
  { key: 'tab1', label: 'Tab 1', children: <div>Content for Tab 1</div> },
  { key: 'tab2', label: 'Tab 2', children: <div>Content for Tab 2</div> },
  { key: 'tab3', label: 'Tab 3', children: <div>Content for Tab 3</div> },
];

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultActiveKey: 'tab1',
    centered: false,
  },
};
