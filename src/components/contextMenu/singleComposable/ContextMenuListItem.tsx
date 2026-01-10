/**
 * Scope:
 * [ ] - The individual item in the context menu list
 * [ ] - Leading icon if needed
 * [ ] - Trailing icon if needed
 * [ ] - Label if needed
 */

import type { ReactNode } from 'react';
import { View } from 'react-native';
import { ContextMenuListItemIcon } from './ContextMenuListItemIcon';
import { ContextMenuListItemLabel } from './ContextMenuListItemLabel';

interface ContextMenuListItemProps {
  children: ReactNode;
}

export const ContextMenuListItem = ({ children }: ContextMenuListItemProps) => {
  return <View>{children}</View>;
};

ContextMenuListItem.LeadingIcon = ContextMenuListItemIcon;
ContextMenuListItem.Label = ContextMenuListItemLabel;
ContextMenuListItem.TrailingIcon = ContextMenuListItemIcon;
