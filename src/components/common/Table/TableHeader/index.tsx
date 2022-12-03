import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const TableHeader = ({ ...props }: Props) => {
  return (
    <div {...props} className={$(s.container, props.className)}>
      {props.children}
    </div>
  );
};
