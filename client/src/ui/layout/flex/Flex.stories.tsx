import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { SizeOptions } from '../generic';

const meta = {
  title: 'Example/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    margin: {
      description: 'The margin of the flex.',
      defaultValue: ['none', 'none', 'none', 'none'],
      control: {
        type: 'array',
        options: SizeOptions,
      },
    },
    padding: {
      description: 'The padding of the flex.',
      defaultValue: ['none', 'none', 'none', 'none'],
      control: {
        type: 'array',
        options: SizeOptions,
      },
    },
  },
  render: (args) => (
    <Flex {...args}>
      <span
        style={{
          width: '20px',
          height: '20px',
          border: '1px solid gray',
        }}
      >
        1
      </span>
      <span
        style={{
          width: '20px',
          height: '20px',
          border: '1px solid gray',
        }}
      >
        2
      </span>
      <span
        style={{
          width: '20px',
          height: '20px',
          border: '1px solid gray',
        }}
      >
        3
      </span>
      <span
        style={{
          width: '20px',
          height: '20px',
          border: '1px solid gray',
        }}
      >
        4
      </span>
    </Flex>
  ),
} as Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  style: {
    border: '1px solid black',
  },
  margin: ['none', 'none', 'none', 'none'],
  padding: ['sm', 'sm', 'sm', 'sm'],
};
