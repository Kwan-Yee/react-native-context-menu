import { type ReactNode } from 'react';
import { View } from 'react-native';

interface ContextMenuListFooterProps {
  children: ReactNode;
}

export const ContextMenuListFooter = ({
  children,
}: ContextMenuListFooterProps) => {
  return <View>{children}</View>;
};
