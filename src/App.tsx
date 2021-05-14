import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { checkUser, getInitialUserData, getRequestError, getUserData, isUser } from './App.helpers';
import * as S from './App.styles';
import { CardList } from './components/CardList/CardList';
import { ErrorBox } from './components/ErrorBox/ErrorBox';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { ErrorMessages } from './constants/errorMessages';
import { IUser } from './data/initialData';
import { api } from './services/api/github';
import { GlobalStyle } from './theme/GlobalStyle';
import { myDefaultTheme } from './theme/myDefaultTheme';

export const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<ErrorMessages | null>(null);

  useEffect(() => {
    const setInitialState = async () => {
      const initialState = await getInitialUserData();
      setUsers(initialState);
    };
    setInitialState();
  }, []);

  const addNewUser = async (username: string) => {
    const isUserAdded = checkUser(users, username);
    if (isUserAdded) {
      setError(ErrorMessages.userAlreadyExists);
      return;
    }
    const newFullUserData = await api.getUser(username);

    const requestError = getRequestError(newFullUserData);

    if (requestError) {
      setError(requestError);
      return;
    }

    if (isUser(newFullUserData)) {
      const userData = getUserData(newFullUserData);
      setUsers((previousState) => [...previousState, userData]);
    }
  };

  const handleError = (errorMessage: ErrorMessages | null): void => {
    setError(errorMessage);
  };

  return (
    <ThemeProvider theme={myDefaultTheme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <S.FormWrapper>
          <Form onSubmit={addNewUser} onError={handleError} />
          {error && <ErrorBox text={error} />}
        </S.FormWrapper>
        <CardList users={users} />
      </Layout>
    </ThemeProvider>
  );
};
