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
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
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
      <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
    ),
  },
  render: ({ src, ...args }) => <Avatar src={src} {...args} />,
};
