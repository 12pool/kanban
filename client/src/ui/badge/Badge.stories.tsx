import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const SizeOptions = ['sm', 'md'];
const RadiusOptions = ['sm', 'md'];
const ColorOptions = ['blue', 'orange'];

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of badge.',
      control: {
        type: 'select',
        options: SizeOptions,
      },
    },
    radius: {
      description: 'Radius of badge.',
      control: {
        type: 'select',
        options: RadiusOptions,
      },
    },
    color: {
      description: 'Color of badge.',
      control: {
        type: 'select',
        options: ColorOptions,
      },
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'badge content',
    size: SizeOptions[1],
    radius: RadiusOptions[0],
    color: ColorOptions[1],
  },
} as Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};