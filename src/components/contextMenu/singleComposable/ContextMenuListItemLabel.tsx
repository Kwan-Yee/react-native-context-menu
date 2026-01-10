import type { ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListItemLabelProps {
  children: ReactNode;
}

export const ContextMenuListItemLabel = ({
  children,
}: ContextMenuListItemLabelProps) => {
  return <View>{children}</View>;
};
