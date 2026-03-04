import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MainLayout from './index';

const meta = {
  title: 'Components/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Basic responsive layout using Ant Design Layout components.',
      },
    },
  },
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 20, background: '#f3f4f6' }}>
      <MainLayout>
        <div>
          <h2>Example page content</h2>
          <p>This content is passed as children to MainLayout and should render inside the layout.</p>
        </div>
      </MainLayout>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
