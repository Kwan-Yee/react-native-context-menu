import { type ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListHeaderProps {
  children: ReactNode;
}

export const ContextMenuListHeader = ({
  children,
}: ContextMenuListHeaderProps) => {
  return <View>{children}</View>;
};
