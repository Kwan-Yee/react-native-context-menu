/**
 * Scope:
 * [ ] - 'Lift' the target and its context menu list above everything
 * [ ] - Animation logics for entering and exiting
 * [ ] - Scroll view if opt in
 */
import { useContext, type ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { ContextMenuContext } from '../singleComposable/ContextMenuContext';
import { ContextMenuOverlay } from '../singleComposable/ContextMenuOverlay';

interface CloneProps {
  children: ReactNode;
}

export const Clone = ({ children }: CloneProps) => {
  const { anchor } = useContext(ContextMenuContext);
  return (
    <ContextMenuOverlay>
      <ScrollView>
        {anchor}
        {children}
      </ScrollView>
    </ContextMenuOverlay>
  );
};
