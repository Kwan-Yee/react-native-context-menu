/**
 * Scope:
 * [ ] - Hold target's layout states
 * [ ] - Hold states for consumer's control about the components' behaviour
 */
import { createContext, useMemo, useState, type ReactNode } from 'react';
import { Text } from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';
import type { MeasuredDimensions } from 'react-native-reanimated/lib/typescript/commonTypes';
import {
  OverflowAnchorTreatment,
  type ContextMenuContextValue,
  type ContextMenuExternalProps,
} from '../../../types/ContextMenu.types';

const defaultCallbacks = () => console.warn('Has to be use within ContextMenuContext');

export const ContextMenuContext = createContext<ContextMenuContextValue>({
  anchor: null,
  anchorAnimatedRef: null,
  anchorLayout: null,
  contextMenuListContainerStyle: {},
  open: false,
  overflowAnchorTreatment: OverflowAnchorTreatment.ANIMATE_INTO_VIEW,
  sections: [],
  setAnchor: defaultCallbacks,
  setAnchorLayout: defaultCallbacks,
  setInternalOpen: defaultCallbacks,
});

export const ContextMenu = (props: ContextMenuExternalProps) => {
  const { contextMenuListContainerStyle, open, overflowAnchorTreatment, sections } = props;

  const [internalOpen, setInternalOpen] = useState(false);
  const [anchorLayout, setAnchorLayout] = useState<MeasuredDimensions | null>(null);
  const [anchor, setAnchor] = useState<ReactNode>(null);
  const anchorAnimatedRef = useAnimatedRef();

  const value = useMemo(() => {
    return {
      anchor,
      anchorAnimatedRef,
      anchorLayout,
      contextMenuListContainerStyle,
      open: open ?? internalOpen,
      overflowAnchorTreatment,
      sections,
      setAnchor,
      setAnchorLayout,
      setInternalOpen,
    };
  }, [
    anchor,
    anchorAnimatedRef,
    anchorLayout,
    contextMenuListContainerStyle,
    internalOpen,
    open,
    overflowAnchorTreatment,
    sections,
  ]);

  return (
    <ContextMenuContext value={value}>
      <Text>ContextMenu</Text>
    </ContextMenuContext>
  );
};
