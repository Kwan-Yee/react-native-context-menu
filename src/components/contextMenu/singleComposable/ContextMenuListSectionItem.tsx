/**
 * Scope:
 * [ ] - The individual item in the context menu list
 * [ ] - Leading icon if needed
 * [ ] - Trailing icon if needed
 * [ ] - Label if needed
 */

import type { ReactNode } from 'react';
import { View } from 'react-native';
import { ContextMenuListSectionItemIcon } from './ContextMenuListSectionItemIcon';
import { ContextMenuListSectionItemLabel } from './ContextMenuListSectionItemLabel';

interface ContextMenuListSectionItemProps {
  children: ReactNode;
}

export const ContextMenuListSectionItem = ({
  children,
}: ContextMenuListSectionItemProps) => {
  return <View>{children}</View>;
};

ContextMenuListSectionItem.LeadingIcon = ContextMenuListSectionItemIcon;
ContextMenuListSectionItem.Label = ContextMenuListSectionItemLabel;
ContextMenuListSectionItem.TrailingIcon = ContextMenuListSectionItemIcon;
