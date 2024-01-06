import type { Meta, StoryObj } from '@storybook/react';

import '../../reset.css';
import '../../index.css';

import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    className: '',
    placeholder: 'Placeholder',
    value: '',
  },
  render: (args) => <Input {...args} />,
};
