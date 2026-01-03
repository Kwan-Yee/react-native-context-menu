import { type ReactNode } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { type AnimatedRef } from 'react-native-reanimated';
import type { MeasuredDimensions } from 'react-native-reanimated/lib/typescript/commonTypes';

export interface ContextMenuListItem {
  label: string;
  leadingIcon?: ReactNode;
  onPress: () => void;
  trailingIcon?: ReactNode;
}

export interface ContextMenuListSection {
  items: ContextMenuListItem[];
  sectionTitle?: string;
}

export enum OverflowAnchorTreatment {
  ANIMATE_INTO_VIEW = 'animate-into-view',
  OVERRIDE = 'override',
  SHRINK_TO_FIT = 'shrink-to-fit',
}

export interface ContextMenuExternalProps {
  contextMenuListContainerStyle: StyleProp<ViewStyle>;
  open?: boolean;
  overflowAnchorTreatment: OverflowAnchorTreatment;
  sections: ContextMenuListSection[];
}

export interface ContextMenuInternalStates {
  anchor: ReactNode;
  anchorAnimatedRef: AnimatedRef | null;
  anchorLayout: MeasuredDimensions | null;
  contextMenuListContainerStyle: StyleProp<ViewStyle>;
  setAnchor: (anchor: ReactNode) => void;
  setAnchorLayout: (layout: MeasuredDimensions) => void;
  setInternalOpen: (open: boolean) => void;
}

export type ContextMenuContextValue = ContextMenuInternalStates & ContextMenuExternalProps;
