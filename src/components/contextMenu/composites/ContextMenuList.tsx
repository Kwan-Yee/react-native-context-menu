/**
 * Scope:
 * [ ] - The container holding the list of menu items, separators, headers and footer
 */
import { type ReactNode } from 'react';
import { View } from 'react-native';
import { ContextMenuListFooter } from './ContextMenuListFooter';
import { ContextMenuListHeader } from './ContextMenuListHeader';
import { ContextMenuListItem } from './ContextMenuListItem';
import { ContextMenuListSeparator } from './ContextMenuListSeparator';

interface ContextMenuListProps {
  children: ReactNode;
}

export const ContextMenuList = ({ children }: ContextMenuListProps) => {
  return <View>{children}</View>;
};

ContextMenuList.Item = ContextMenuListItem;
ContextMenuList.Separator = ContextMenuListSeparator;
ContextMenuList.Header = ContextMenuListHeader;
ContextMenuList.Footer = ContextMenuListFooter;
