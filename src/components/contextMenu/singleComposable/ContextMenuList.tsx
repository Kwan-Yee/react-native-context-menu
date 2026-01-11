/**
 * Scope:
 * [ ] - The container holding the list of menu items, separators, headers and footer
 */
import { type ReactNode } from 'react';
import { View } from 'react-native';
import { ContextMenuListFooter } from './ContextMenuListFooter';
import { ContextMenuListHeader } from './ContextMenuListHeader';
import { ContextMenuListSection } from './ContextMenuListSection';

interface ContextMenuListProps {
  children: ReactNode;
}

export const ContextMenuList = ({ children }: ContextMenuListProps) => {
  return <View>{children}</View>;
};

ContextMenuList.Header = ContextMenuListHeader;
ContextMenuList.Section = ContextMenuListSection;
ContextMenuList.Footer = ContextMenuListFooter;
