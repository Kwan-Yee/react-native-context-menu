import type { ContextMenuListSection as ContextMenuListSectionProps } from '../../../types/ContextMenu.types';
import { ContextMenuListSection } from '../singleComposable/ContextMenuListSection';
import { ContextMenuListSectionItem } from '../singleComposable/ContextMenuListSectionItem';

export const Section = ({ items }: ContextMenuListSectionProps) => {
  return (
    <ContextMenuListSection>
      {items.map(() => (
        <ContextMenuListSection.Item>
          <ContextMenuListSectionItem.LeadingIcon>
            Leading Icon
          </ContextMenuListSectionItem.LeadingIcon>
          <ContextMenuListSectionItem.Label>
            Label
          </ContextMenuListSectionItem.Label>
          <ContextMenuListSectionItem.TrailingIcon>
            Trailing Icon
          </ContextMenuListSectionItem.TrailingIcon>
        </ContextMenuListSection.Item>
      ))}
    </ContextMenuListSection>
  );
};
