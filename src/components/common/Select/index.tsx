import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';
import s from './s.scss';
import $ from 'classnames';

export type SelectOption = {
  name: string;
  value: any;
};

interface Props {
  options: SelectOption[];
  primalOption?: SelectOption;
  onChange?: (option?: SelectOption) => void;
}

export const Select = ({ options, primalOption, onChange }: Props) => {
  const [opened, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<SelectOption | undefined>(
    primalOption ? primalOption : undefined
  );
  const optionContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionContainer.current &&
        !optionContainer.current.contains(event.target as Node)
      ) {
        setOpen(false);
        // event.stopPropagation();
      }
    };
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [optionContainer]);

  const handleSelect = (item: SelectOption) => {
    setOption(item);
    setOpen(false);
    onChange && onChange(item);
  };

  const handleOpen = (e: SyntheticEvent) => {
    setOpen(!opened);
    e.stopPropagation();
  };

  return (
    <div className={s.container}>
      <div
        className={$(s.label, { [s.close]: !opened }, { [s.empty]: !option })}
        onClick={handleOpen}
      >
        <div>{option ? option.name : 'Empty'}</div>
        <div
          className={$(s.bird, { [s.close]: !opened }, { [s.open]: opened })}
        ></div>
      </div>
      <div
        className={$(s.optionContainer, { [s.closed]: !opened })}
        ref={optionContainer}
      >
        {options.map((item, index) => (
          <div
            className={$(s.option, { [s.current]: Object.is(item, option) })}
            key={index}
            onClick={() => handleSelect(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
