import type { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { SunIcon } from '@radix-ui/react-icons';

import '../../reset.css';
import '../../index.css';

import { DropdownMenu } from './DropdownMenu';

const meta = {
  title: 'Example/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: { table: { disable: true } },
    modal: { table: { disable: true } },
    forceMount: { table: { disable: true } },
    trigger: { table: { disable: true } },
    defaultOpen: { table: { disable: true } },
    handleDropdownToggle: { table: { disable: true } },
    open: {
      action: 'open',
      description: 'Whether or not the dropdown menu is open.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    trigger: <button>Toggle button</button>,
    open: false,
    handleDropdownToggle: () => console.log,
  },
} as Meta<typeof DropdownMenu>;

export default meta;

export const Primary = () => {
  const [args, updateArgs] = useArgs<{
    open: boolean;
    handleDropdownToggle: () => void;
  }>();

  const handleClose = () => {
    updateArgs({ open: false });
  };

  const handleToggle = () => {
    updateArgs({ open: !args.open });
  };

  return (
    <DropdownMenu
      open={args.open}
      handleDropdownToggle={handleToggle}
      trigger={<button>Trigger button</button>}
    >
      <DropdownMenu.Content
        sideOffset={8}
        align="end"
        onEscapeKeyDown={handleClose}
        onInteractOutside={handleClose}
      >
        <DropdownMenu.Item disabled>Profile</DropdownMenu.Item>
        <DropdownMenu.Item rightSlot={<span>⌘ + ⇧</span>}>
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={<SunIcon />}>Logout</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Help</DropdownMenu.Item>
        <DropdownMenu.Label>Label</DropdownMenu.Label>
        <DropdownMenu.Arrow />
        <DropdownMenu.Group>
          <DropdownMenu.Item>Report an issue</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
              <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
              <DropdownMenu.Arrow />
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
        <DropdownMenu.CheckboxItem checked={true}>
          Checkbox item
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={false}>
          Checkbox item 2
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.RadioGroup value="one">
          <DropdownMenu.RadioItem value="one">
            Radio item one
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="two">
            Radio item two
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
