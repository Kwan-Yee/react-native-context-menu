import type { ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListItemIconProps {
  children: ReactNode;
}

export const ContextMenuListSectionItemIcon = ({
  children,
}: ContextMenuListItemIconProps) => {
  return <View>{children}</View>;
};
