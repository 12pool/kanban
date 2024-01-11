import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

import {
  AvatarIcon,
  AccessibilityIcon,
  ActivityLogIcon,
  ArchiveIcon,
  CardStackIcon,
  BarChartIcon,
  ClipboardIcon,
  CookieIcon,
  DiscIcon,
  BellIcon,
  BackpackIcon,
  BadgeIcon,
  Cross1Icon,
  CommitIcon,
} from '@radix-ui/react-icons';

type Icons =
  | 'AvatarIcon'
  | 'AccessibilityIcon'
  | 'ActivityLogIcon'
  | 'ArchiveIcon'
  | 'CardStackIcon'
  | 'BarChartIcon'
  | 'ClipboardIcon'
  | 'CookieIcon'
  | 'DiscIcon'
  | 'BellIcon'
  | 'BackpackIcon'
  | 'BadgeIcon'
  | 'Cross1Icon'
  | 'CommitIcon';

export const icons: Record<
  Icons,
  ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
> = {
  AvatarIcon,
  AccessibilityIcon,
  ActivityLogIcon,
  ArchiveIcon,
  CardStackIcon,
  BarChartIcon,
  ClipboardIcon,
  CookieIcon,
  DiscIcon,
  BellIcon,
  BackpackIcon,
  BadgeIcon,
  Cross1Icon,
  CommitIcon,
};

export const iconsList = Object.keys(icons) as Icons[];
