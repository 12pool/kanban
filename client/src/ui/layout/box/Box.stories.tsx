import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { SizeOptions } from '../generic';

const meta = {
  title: 'Example/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    margin: {
      description: 'The margin of the box.',
      defaultValue: ['none', 'none', 'none', 'none'],
      control: {
        type: 'array',
        options: SizeOptions,
      },
    },
    padding: {
      description: 'The padding of the box.',
      defaultValue: ['none', 'none', 'none', 'none'],
      control: {
        type: 'array',
        options: SizeOptions,
      },
    },
  },
  render: ({ children, ...args }) => <Box {...args}>{children}</Box>,
} as Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  children: 'Hello, world!',
  style: {
    color: "white",
    border: '1px solid #f3f3f3',
  },
  margin: ['none', 'none', 'none', 'none'],
  padding: ['none', 'none', 'none', 'none'],
};
