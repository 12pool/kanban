import type { Meta, StoryObj } from '@storybook/react';

import '../../reset.css';
import '../../index.css';

import { Label } from './Label';

const meta = {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],
} as Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Hello world',
    htmlFor: 'test',
    className: '',
  },
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
};
