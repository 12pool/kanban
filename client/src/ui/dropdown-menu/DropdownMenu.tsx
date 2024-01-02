import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

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
      <RadixDropdownMenu.Trigger onClick={handleDropdownToggle}>
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
  ...props
}: RadixDropdownMenu.DropdownMenuSubContentProps) {
  return (
    <RadixDropdownMenu.Content {...props}>{children}</RadixDropdownMenu.Content>
  );
};

DropdownMenu.Arrow = function DropdownMenuArrow(
  props: RadixDropdownMenu.DropdownMenuArrowProps,
) {
  return <RadixDropdownMenu.Arrow {...props} />;
};

DropdownMenu.Item = function DropdownMenuItem({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuItemProps) {
  return <RadixDropdownMenu.Item {...props}>{children}</RadixDropdownMenu.Item>;
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
  ...props
}: RadixDropdownMenu.DropdownMenuLabelProps) {
  return (
    <RadixDropdownMenu.Label {...props}>{children}</RadixDropdownMenu.Label>
  );
};

DropdownMenu.CheckboxItem = function DropdownMenuCheckboxItem({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuCheckboxItemProps) {
  return (
    <RadixDropdownMenu.CheckboxItem {...props}>
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
  ...props
}: RadixDropdownMenu.DropdownMenuRadioItemProps) {
  return (
    <RadixDropdownMenu.RadioItem {...props}>
      {children}
    </RadixDropdownMenu.RadioItem>
  );
};

DropdownMenu.ItemIndicator = function DropdownMenuItemIndicator({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuItemIndicatorProps) {
  return (
    <RadixDropdownMenu.ItemIndicator {...props}>
      {children}
    </RadixDropdownMenu.ItemIndicator>
  );
};

DropdownMenu.Separator = function DropdownMenuSeparator(
  props: RadixDropdownMenu.DropdownMenuSeparatorProps,
) {
  return <RadixDropdownMenu.Separator {...props} />;
};

DropdownMenu.Sub = function DropdownMenuSub({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuSubProps) {
  return <RadixDropdownMenu.Sub {...props}>{children}</RadixDropdownMenu.Sub>;
};

DropdownMenu.SubTrigger = function DropdownMenuSubTrigger({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuSubTriggerProps) {
  return (
    <RadixDropdownMenu.SubTrigger {...props}>
      {children}
    </RadixDropdownMenu.SubTrigger>
  );
};

DropdownMenu.SubContent = function DropdownMenuSubContent({
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuSubContentProps) {
  return (
    <RadixDropdownMenu.SubContent {...props}>
      {children}
    </RadixDropdownMenu.SubContent>
  );
};
