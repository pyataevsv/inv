import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLDivElement> {
  h2?: string;
  h1?: string;
  marginTop?: boolean;
}

export const Container = ({ h2, h1, marginTop, ...props }: Props) => {
  return (
    <div
      {...props}
      className={$(s.container, props.className, {
        [s.withtitlte]: h1 || h2 || marginTop,
      })}
    >
      {h1 && (
        <div className={s.h1}>
          <h1>{h1}</h1>
        </div>
      )}
      {h2 && (
        <div className={s.h2}>
          <h2>{h2}</h2>
        </div>
      )}
      {props.children}
    </div>
  );
};
