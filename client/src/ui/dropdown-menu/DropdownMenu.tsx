import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import { CheckIcon, DotFilledIcon } from '@radix-ui/react-icons';

import styles from './DropdownMenu.module.css';

type DropdownMenuContentProps = {
  open: boolean;
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
export const DropdownMenu = ({
  defaultOpen,
  open,
  modal = true,
  children,
  trigger,
  forceMount,
  onOpenChange,
  handleDropdownToggle,
}: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root
      defaultOpen={defaultOpen}
      open={open}
      modal={modal}
      onOpenChange={onOpenChange}
    >
      <RadixDropdownMenu.Trigger
        className={styles.DropdownMenuTrigger}
        onPointerDown={handleDropdownToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleDropdownToggle();
          }
        }}
        data-testid="dropdown-menu-trigger"
      >
        {trigger}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal forceMount={forceMount}>
        {children}
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

/***
 * use only for submenus
 */
DropdownMenu.Portal = function DropdownMenuPortal({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuPortalProps) {
  return (
    <RadixDropdownMenu.Portal {...props}>{children}</RadixDropdownMenu.Portal>
  );
};

DropdownMenu.Content = function DropdownMenuContent({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Content
      data-testid="dropdown-menu-content"
      className={`${styles.DropdownMenuContent} ${className}`}
      {...props}
    >
      {children}
    </RadixDropdownMenu.Content>
  );
};

DropdownMenu.Arrow = function DropdownMenuArrow({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuArrowProps) {
  return (
    <RadixDropdownMenu.Arrow
      className={`${styles.DropdownMenuArrow} ${className}`}
      {...props}
    />
  );
};

DropdownMenu.Item = function DropdownMenuItem({
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
};

DropdownMenu.Group = function DropdownMenuGroup({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuGroupProps) {
  return (
    <RadixDropdownMenu.Group {...props}>{children}</RadixDropdownMenu.Group>
  );
};

DropdownMenu.Label = function DropdownMenuLabel({
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
};

DropdownMenu.CheckboxItem = function DropdownMenuCheckboxItem({
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
};

DropdownMenu.RadioGroup = function DropdownMenuRadioGroup({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuRadioGroupProps) {
  return (
    <RadixDropdownMenu.RadioGroup {...props}>
      {children}
    </RadixDropdownMenu.RadioGroup>
  );
};

DropdownMenu.RadioItem = function DropdownMenuRadioItem({
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
};

DropdownMenu.Separator = function DropdownMenuSeparator({
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuSeparatorProps) {
  return (
    <RadixDropdownMenu.Separator
      className={`${styles.DropdownMenuSeparator} ${className}`}
      {...props}
    />
  );
};

DropdownMenu.Sub = function DropdownMenuSub({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuSubProps) {
  return <RadixDropdownMenu.Sub {...props}>{children}</RadixDropdownMenu.Sub>;
};

DropdownMenu.SubTrigger = function DropdownMenuSubTrigger({
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
};

DropdownMenu.SubContent = function DropdownMenuSubContent({
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
};
