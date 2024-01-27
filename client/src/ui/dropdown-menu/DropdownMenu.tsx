import { forwardRef } from 'react';

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { CheckIcon, DotFilledIcon } from '@radix-ui/react-icons';

import styles from './DropdownMenu.module.css';

type DropdownMenuContentProps = {
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
  handleDropdownToggle: () => void;
  onOpenChange?: (open: boolean) => void;
};

type DropdownMenuPortalProps = {
  forceMount?: true;
};

export type DropdownMenuProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
} & DropdownMenuContentProps &
  DropdownMenuPortalProps;

/***
 * Already contains Portal and trigger usage
 * wrap children in <DropdownMenu.Content> to use
 */

function DropdownMenuRaw({
  defaultOpen,
  open,
  modal = true,
  children,
  trigger,
  forceMount,
  onOpenChange,
  handleDropdownToggle,
}: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root
      defaultOpen={defaultOpen}
      open={open}
      modal={modal}
      onOpenChange={onOpenChange}
    >
      <RadixDropdownMenu.Trigger
        data-testId="dropdown-menu-trigger"
        className={styles.DropdownMenuTrigger}
        onPointerDown={handleDropdownToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDropdownToggle();
          }
        }}
      >
        {trigger}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal forceMount={forceMount}>
        {children}
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
}

/***
 * use only for submenus
 */

function DropdownMenuPortal({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuPortalProps) {
  return (
    <RadixDropdownMenu.Portal {...props}>{children}</RadixDropdownMenu.Portal>
  );
}

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  RadixDropdownMenu.DropdownMenuContentProps
>(function DropdownMenu({ children, className, ...props }, ref) {
  return (
    <RadixDropdownMenu.Content
      data-testid="dropdown-menu-content"
      ref={ref}
      className={`${styles.DropdownMenuContent} ${className}`}
      {...props}
    >
      {children}
    </RadixDropdownMenu.Content>
  );
});

function DropdownMenuArrow({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuArrowProps) {
  return (
    <RadixDropdownMenu.Arrow
      className={`${styles.DropdownMenuArrow} ${className}`}
      {...props}
    />
  );
}

function DropdownMenuItem({
  children,
  icon,
  rightSlot,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuItemProps & {
  icon?: React.ReactNode;
  rightSlot?: React.ReactNode;
}) {
  return (
    <RadixDropdownMenu.Item
      className={`${styles.DropdownMenuItem} ${className}`}
      {...props}
    >
      {icon ? (
        <RadixDropdownMenu.ItemIndicator
          forceMount={true}
          className={styles.DropdownMenuItemIndicator}
        >
          {icon}
        </RadixDropdownMenu.ItemIndicator>
      ) : null}

      {children}
      {rightSlot ? <div className={styles.RightSlot}>{rightSlot}</div> : null}
    </RadixDropdownMenu.Item>
  );
}

function DropdownMenuGroup({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuGroupProps) {
  return (
    <RadixDropdownMenu.Group {...props}>{children}</RadixDropdownMenu.Group>
  );
}

function DropdownMenuLabel({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuLabelProps) {
  return (
    <RadixDropdownMenu.Label
      className={`${styles.DropdownMenuLabel} ${className}`}
      {...props}
    >
      {children}
    </RadixDropdownMenu.Label>
  );
}

function DropdownMenuCheckboxItem({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuCheckboxItemProps) {
  return (
    <RadixDropdownMenu.CheckboxItem
      className={`${styles.DropdownMenuCheckboxItem} ${className}`}
      {...props}
    >
      <RadixDropdownMenu.ItemIndicator
        className={styles.DropdownMenuItemIndicator}
      >
        <CheckIcon />
      </RadixDropdownMenu.ItemIndicator>
      {children}
    </RadixDropdownMenu.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuRadioGroupProps) {
  return (
    <RadixDropdownMenu.RadioGroup {...props}>
      {children}
    </RadixDropdownMenu.RadioGroup>
  );
}

function DropdownMenuRadioItem({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuRadioItemProps) {
  return (
    <RadixDropdownMenu.RadioItem
      className={`${styles.DropdownMenuRadioItem} ${className}`}
      {...props}
    >
      <RadixDropdownMenu.ItemIndicator
        className={styles.DropdownMenuItemIndicator}
      >
        <DotFilledIcon />
      </RadixDropdownMenu.ItemIndicator>
      {children}
    </RadixDropdownMenu.RadioItem>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuSeparatorProps) {
  return (
    <RadixDropdownMenu.Separator
      className={`${styles.DropdownMenuSeparator} ${className}`}
      {...props}
    />
  );
}

function DropdownMenuSub({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuSubProps) {
  return <RadixDropdownMenu.Sub {...props}>{children}</RadixDropdownMenu.Sub>;
}

function DropdownMenuSubTrigger({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuSubTriggerProps) {
  return (
    <RadixDropdownMenu.SubTrigger
      className={`${styles.DropdownMenuSubTrigger} ${className}`}
      {...props}
    >
      {children}
    </RadixDropdownMenu.SubTrigger>
  );
}

function DropdownMenuSubContent({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuSubContentProps) {
  return (
    <RadixDropdownMenu.SubContent
      className={`${styles.DropdownMenuSubContent} ${className}`}
      {...props}
    >
      {children}
    </RadixDropdownMenu.SubContent>
  );
}

export const DropdownMenu = Object.assign(DropdownMenuRaw, {
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Arrow: DropdownMenuArrow,
  Item: DropdownMenuItem,
  Group: DropdownMenuGroup,
  Label: DropdownMenuLabel,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Separator: DropdownMenuSeparator,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
});
