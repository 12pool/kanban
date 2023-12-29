import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      action: 'checked',
      description: 'Whether or not the checkbox is checked.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    asChild: { table: { disable: true } },
  },
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
