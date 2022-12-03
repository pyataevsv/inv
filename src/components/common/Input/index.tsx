import React from 'react';
import s from './s.scss';
import $ from 'classnames';

interface Props extends React.HTMLProps<HTMLInputElement> {
  success?: boolean;
  error?: boolean;
  errorLabel?: string;
  label?: string;
}

export const Input = ({
  error,
  success,
  label,
  errorLabel,
  ...props
}: Props) => (
  <div className={s.box}>
    {label && <div className={s.label}>{label}</div>}
    <input
      className={$(
        s.input,
        { [s.error]: error || !!errorLabel },
        { [s.success]: success }
      )}
      type="text"
      {...props}
    />
    {errorLabel && <div className={s.errorLabel}>{errorLabel}</div>}
  </div>
);
