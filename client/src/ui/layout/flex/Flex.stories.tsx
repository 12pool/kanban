import type { Meta, StoryObj } from '@storybook/react';

import '../../../reset.css';
import '../../../index.css';

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
          color: 'white',
          width: '100px',
          height: '20px',
          border: '1px solid #f3f3f3',
        }}
      >
        flex item
      </span>
      <span
        style={{
          color: 'white',
          width: '100px',
          height: '20px',
          border: '1px solid #f3f3f3',
        }}
      >
        flex item
      </span>
      <span
        style={{
          color: 'white',
          width: '100px',
          height: '20px',
          border: '1px solid #f3f3f3',
        }}
      >
        flex item
      </span>
      <span
        style={{
          color: 'white',
          width: '100px',
          height: '20px',
          border: '1px solid #f3f3f3',
        }}
      >
        flex item
      </span>
    </Flex>
  ),
} as Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  style: {
    border: '1px solid gray',
  },
  margin: ['none', 'none', 'none', 'none'],
  padding: ['sm', 'sm', 'sm', 'sm'],
};
