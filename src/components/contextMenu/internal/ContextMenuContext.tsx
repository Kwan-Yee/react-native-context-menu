/**
 * Scope:
 * [ ] - Hold target's layout states
 * [ ] - Hold states for consumer's control about the components' behaviour
 */
import { createContext, useMemo, useState } from 'react';
import { Text } from 'react-native';
import { useAnimatedRef } from 'react-native-reanimated';
import type {
  InstanceOrElement,
  MeasuredDimensions,
} from 'react-native-reanimated/lib/typescript/commonTypes';
import {
  type ContextMenuContextValue,
  type ContextMenuExternalProps,
  OverflowAnchorTreatment,
} from '../../../types/ContextMenu.types';

const defaultCallbacks = () => console.warn('Has to be use within ContextMenuContext');

export const ContextMenuContext = createContext<ContextMenuContextValue>({
  anchorAnimatedRef: null,
  anchorLayout: null,
  contextMenuListContainerStyle: {},
  open: false,
  overflowAnchorTreatment: OverflowAnchorTreatment.ANIMATE_INTO_VIEW,
  sections: [],
  setAnchorLayout: defaultCallbacks,
  setInternalOpen: defaultCallbacks,
});

export const ContextMenu = (props: ContextMenuExternalProps) => {
  const { contextMenuListContainerStyle, open, overflowAnchorTreatment, sections } = props;

  const [internalOpen, setInternalOpen] = useState(false);
  const [anchorLayout, setAnchorLayout] = useState<MeasuredDimensions | null>(null);
  const anchorAnimatedRef = useAnimatedRef<InstanceOrElement>();

  const value = useMemo(() => {
    return {
      anchorAnimatedRef,
      anchorLayout,
      contextMenuListContainerStyle,
      open: open ?? internalOpen,
      overflowAnchorTreatment,
      sections,
      setAnchorLayout,
      setInternalOpen,
    };
  }, [
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
