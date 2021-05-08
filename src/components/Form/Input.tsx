import { VFC } from 'react';

import * as S from './Form.styles';

interface IInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: VFC<IInput> = ({ onChange, value }) => (
  <S.StyledInput
    type="text"
    placeholder="Github username"
    name="githubname"
    value={value}
    onChange={onChange}
    autoComplete="off"
    required
  />
);
