/**
 * Scope:
 * [ ] - Responsible for holding the blur, context menu list and target if needed. consumer can opt in for 'modal-like' behaviour or not
 */

import type { ReactNode } from 'react';
import { OverKeyboardView } from 'react-native-keyboard-controller';

interface ContextMenuOverlayProps {
  children: ReactNode;
}

export function ContextMenuOverlay({ children }: ContextMenuOverlayProps) {
  return <OverKeyboardView visible={true}>{children}</OverKeyboardView>;
}
