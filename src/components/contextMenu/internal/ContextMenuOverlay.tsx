/**
 * Scope:
 * [ ] - Responsible for holding the blur, context menu list and target if needed. consumer can opt in for 'modal-like' behaviour or not
 */

import { OverKeyboardView } from 'react-native-keyboard-controller';

export function ContextMenuOverlay() {
  return <OverKeyboardView visible={true}>ContextMenuOverlay</OverKeyboardView>;
}
