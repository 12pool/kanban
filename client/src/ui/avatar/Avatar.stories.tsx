import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: { table: { disable: true } },
    className: { table: { disable: true } },
    imageClassName: { table: { disable: true } },
    fallbackClassName: { table: { disable: true } },
    src: {
      description: 'The image source.',
      control: {
        type: 'text',
      },
    },
    fallback: {
      description: 'The fallback content.',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'The image alt attribute.',
      control: {
        type: 'text',
      },
    },
    delayMs: {
      description:
        'The delay in milliseconds before showing the fallback content.',
      defaultValue: 600,
      control: {
        type: 'number',
      },
    },
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: '/user-avatar-fallback.svg',
    alt: 'Avatar',
  },
  render: ({ src, ...args }) => <Avatar src={src} {...args} />,
};

export const Fallback: Story = {
  args: {
    src: 'asd',
    fallback: 'Fallback',
  },
  render: ({ src, ...args }) => <Avatar src={src} {...args} />,
};

export const FallbackWithImage: Story = {
  args: {
    src: 'asd',
    fallback: (
      <img src="/user-avatar-fallback.svg" />
    ),
  },
  render: ({ src, ...args }) => <Avatar src={src} {...args} />,
};
