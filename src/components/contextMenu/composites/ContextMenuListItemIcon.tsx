import type { ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListItemIconProps {
  children: ReactNode;
}

export const ContextMenuListItemIcon = ({
  children,
}: ContextMenuListItemIconProps) => {
  return <View>{children}</View>;
};
