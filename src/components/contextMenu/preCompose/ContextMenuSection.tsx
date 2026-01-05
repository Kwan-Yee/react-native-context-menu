import { ContextMenuList } from '../composites/ContextMenuList';
import { ContextMenuListItem } from '../composites/ContextMenuListItem';

export const ContextMenuSection = () => {
  return (
    <ContextMenuList>
      <ContextMenuList.Header>Header</ContextMenuList.Header>
      <ContextMenuList.Item>
        <ContextMenuListItem.LeadingIcon>
          Leading Icon
        </ContextMenuListItem.LeadingIcon>
        <ContextMenuListItem.Label>Label</ContextMenuListItem.Label>
        <ContextMenuListItem.TrailingIcon>
          Trailing Icon
        </ContextMenuListItem.TrailingIcon>
      </ContextMenuList.Item>
    </ContextMenuList>
  );
};
