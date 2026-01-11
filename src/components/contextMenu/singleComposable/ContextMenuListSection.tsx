import type { ReactNode } from 'react';
import { View } from 'react-native';
import { ContextMenuListSectionItem } from './ContextMenuListSectionItem';
import { ContextMenuListSectionSeparator } from './ContextMenuListSectionSeparator';

export const ContextMenuListSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <View>{children}</View>;
};

ContextMenuListSection.Item = ContextMenuListSectionItem;
ContextMenuListSection.Separator = ContextMenuListSectionSeparator;
