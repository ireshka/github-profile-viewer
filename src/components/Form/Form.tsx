import React, { useState, VFC } from 'react';

import { validateUsername } from './Form.helpers';
import * as S from './Form.styles';
import { Input } from './Input';

interface IForm {
  onSubmit: (username: string) => void;
}

export const Form: VFC<IForm> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    const isValidUsername = validateUsername(inputValue);
    if (isValidUsername) {
      onSubmit(inputValue);
      setInputValue('');
    } else {
      // set error state
      console.log('Invalid username');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    const trimmedValue = value.trim();
    if (trimmedValue.length > 0) {
      setInputValue(trimmedValue);
    } else {
      setInputValue('');
    }
  };

  return (
    <S.StyledForm action="" onSubmit={handleSubmit} spellCheck="false">
      <S.StyledInputWrapper>
        <Input onChange={handleChange} value={inputValue} />
        <S.StyledButton type="submit">Add profile</S.StyledButton>
      </S.StyledInputWrapper>
    </S.StyledForm>
  );
};
