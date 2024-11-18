import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '@/components/common/Header.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    picture: 'https://picsum.photos/200/300',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Classic: Story = {
  args: {
    picture: 'https://picsum.photos/200/300',
  },
};