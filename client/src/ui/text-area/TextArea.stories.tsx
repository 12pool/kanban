import type { Meta, StoryObj } from '@storybook/react';

import '../../reset.css';
import '../../index.css';

import { TextArea } from './TextArea';

const meta = {
  title: 'Example/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    register: { table: { disable: true } },
    label: { table: { disable: true } },
  },
} as Meta<typeof TextArea>;

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
  render: (args) => <TextArea {...args} />,
};
