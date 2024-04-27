import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    register: { table: { disable: true } },
    label: { table: { disable: true } },
  },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    className: '',
    placeholder: 'Placeholder',
    value: '',
    error: false,
  },
  render: (args) => {
    return <Input {...args} />;
  },
};
