import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InformationCard from './index';

const meta = {
  title: 'Components/Cards/InformationCard',
  component: InformationCard,
  tags: ['autodocs'],
} satisfies Meta<typeof InformationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Information Card',
    description: 'A short description',
  },
};
