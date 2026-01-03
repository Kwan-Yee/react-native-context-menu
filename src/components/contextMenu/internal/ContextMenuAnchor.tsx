/**
 * Scope:
 * [ ] - Responsible for the positioning of the context menu list by setting layout states
 * [ ] - Responsible for making the original target invisible when the context menu list is visible, if the target is 'lifted' above, else no need to hide
 */
import { use, useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { ContextMenuContext } from './ContextMenuContext';

interface ContextMenuAnchorProps {
  children: React.ReactNode;
}

export const ContextMenuAnchor = ({ children }: ContextMenuAnchorProps) => {
  const { anchorAnimatedRef, setAnchor, setAnchorLayout } = use(ContextMenuContext);

  useEffect(() => {
    setAnchor(children);

    return () => setAnchor(null);
  }, [children, setAnchor]);

  useEffect(() => {
    if (!anchorAnimatedRef) return;

    anchorAnimatedRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setAnchorLayout({ height, pageX, pageY, width, x, y });
    });
  }, [anchorAnimatedRef, setAnchorLayout]);

  return <Animated.View ref={anchorAnimatedRef}>{children}</Animated.View>;
};
