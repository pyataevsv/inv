import React from 'react';
import s from './s.scss';

interface Props extends React.ComponentProps<'input'> {
  labelTxt?: string;
  id?: string;
}

export const Checkbox = ({ labelTxt, id, ...props }: Props) => (
  <div className={s.checkbox}>
    <input type={'checkbox'} id={id} {...props}></input>
    {/* <img src={shape} /> */}
    {labelTxt && <label htmlFor={id}>{labelTxt}</label>}
  </div>
);
