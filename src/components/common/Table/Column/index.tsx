import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLDivElement> {
  flexGrow?: number;
  justify?: React.CSSProperties['justifyContent'];
  flexBasis?: React.CSSProperties['flexBasis'];
  alignItems?: React.CSSProperties['alignItems'];
  innerClassName?: string;
}

export const Column = ({
  innerClassName,
  justify,
  flexGrow,
  alignItems,
  flexBasis,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={$(s.container, props.className)}
      style={{
        justifyContent: justify ? justify : undefined,
        flexGrow: flexGrow ? flexGrow : undefined,
        flexBasis: flexBasis ? flexBasis : undefined,
        alignItems: alignItems ? alignItems : undefined,
      }}
    >
      <div className={innerClassName ? innerClassName : undefined}>
        {props.children}
      </div>
    </div>
  );
};
