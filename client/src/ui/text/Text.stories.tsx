import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  render: ({children, ...args}) => <div style={{width: 400}}><Text {...args}>{children}</Text></div>,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'select' } 
    },
    as: {
      options: ['p', 'span', 'div'],
      control: { type: 'select' } 
    },
    color: {
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      control: { type: 'select' } 
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' } 
    },
    weight: {
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      control: { type: 'select' } 
    },
    className: { table: { disable: true } },
  },
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello world"
  }
};
