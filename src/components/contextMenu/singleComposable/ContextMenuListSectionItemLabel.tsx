import type { ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListItemLabelProps {
  children: ReactNode;
}

export const ContextMenuListSectionItemLabel = ({
  children,
}: ContextMenuListItemLabelProps) => {
  return <View>{children}</View>;
};
