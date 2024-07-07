import type { Meta, StoryObj } from '@storybook/vue3';
import LoginButtons from '@/components/common/LoginButtons.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/LoginButtons',
  component: LoginButtons,
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof LoginButtons>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Classic: Story = {
  args: {},
};