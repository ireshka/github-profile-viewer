import React, { useState, VFC } from 'react';

import * as S from './Form.styles';

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
    onSubmit(inputValue);
    setInputValue('');
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
    <S.StyledForm action="" onSubmit={handleSubmit}>
      <S.StyledInputWrapper>
        <S.StyledInput
          type="text"
          placeholder="Github username"
          name="githubname"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <S.StyledButton type="submit">Add profile</S.StyledButton>
      </S.StyledInputWrapper>
    </S.StyledForm>
  );
};
