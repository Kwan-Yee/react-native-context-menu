import type { ReactNode } from 'react';
import type { ContextMenuListSection as IContextMenuListSection } from '../../../types/ContextMenu.types';
import { ContextMenuList } from '../singleComposable/ContextMenuList';
import { Section } from './Section';

interface ListProps {
  footer?: ReactNode;
  header?: ReactNode;
  sections: IContextMenuListSection[];
}

export const List = ({ footer, header, sections }: ListProps) => {
  return (
    <ContextMenuList>
      {header && <ContextMenuList.Header>{header}</ContextMenuList.Header>}
      {sections.map((section, index) => (
        <Section key={index} items={section.items} />
      ))}
      {footer && <ContextMenuList.Footer>{footer}</ContextMenuList.Footer>}
    </ContextMenuList>
  );
};
