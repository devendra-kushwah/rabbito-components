import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navigation, { navItems } from './index';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Primary site navigation using `next/link`. The story sets a predictable pathname so the active link is highlighted in Storybook.',
      },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // Ensure Storybook has a predictable pathname for active link highlighting
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', navItems[0].href);
    }

    return (
      <div style={{ padding: 20, background: '#ffffff' }}>
        <Navigation />
      </div>
    );
  },
  parameters: {
    // show a compact canvas for the nav
    layout: 'centered',
  },
};
