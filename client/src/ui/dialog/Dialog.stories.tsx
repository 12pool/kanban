import type { Meta, StoryObj } from '@storybook/react';

import '../../reset.css';
import '../../index.css';

import { Dialog } from './Dialog';

const meta = {
  title: 'Example/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    triggerClassName: { table: { disable: true } },
    trigger: { table: { disable: true } },
    children: {
      control: { type: 'text' },
    }
  },
  args: {
    children: "This is dialog content"
  }
} as Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ children }) => (
    <Dialog trigger={
      <button>Open Dialog</button>
    }>
      <Dialog.Content>
        {children}
      </Dialog.Content>
    </Dialog>
  ),
};

export const WithTitleAndDescription: Story = {
  render: ({ children }) => (
    <Dialog  trigger={
      <button>Open Dialog</button>
    }>
      <Dialog.Content title="This is title" description="This is description">
        {children}
      </Dialog.Content>
    </Dialog>
  ),
};