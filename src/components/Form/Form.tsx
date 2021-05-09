import React, { useState, VFC } from 'react';

import { ErrorMessages } from '../../constants/errorMessages';
import { validateUsername } from './Form.helpers';
import * as S from './Form.styles';
import { Input } from './Input';

interface IForm {
  onSubmit: (username: string) => void;
  onError: (errorMessage: ErrorMessages | null) => void;
}

export const Form: VFC<IForm> = ({ onSubmit, onError }) => {
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
      onError(ErrorMessages.invalidUsername);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onError(null);
    const { value } = event.currentTarget;
    const trimmedValue = value.trim();
    if (trimmedValue.length > 0) {
      setInputValue(trimmedValue);
    } else {
      setInputValue('');
    }
  };

  return (
    <S.StyledForm onSubmit={handleSubmit} spellCheck="false">
      <S.StyledInputWrapper>
        <Input onChange={handleChange} value={inputValue} />
        <S.StyledButton type="submit">Add profile</S.StyledButton>
      </S.StyledInputWrapper>
    </S.StyledForm>
  );
};
