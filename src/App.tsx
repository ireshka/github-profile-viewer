import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { checkUser, getInitialUserData, getUserData } from './App.helpers';
import { CardList } from './components/CardList/CardList';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { IUser } from './data/initialData';
import { api } from './services/api/github';
import { GlobalStyle } from './theme/GlobalStyle';
import { myDefaultTheme } from './theme/myDefaultTheme';

export const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const setInitialState = async () => {
      const initialState = await getInitialUserData();
      setUsers(initialState);
    };
    setInitialState();
  }, []);

  const addNewUser = async (username: string) => {
    const newFullUserData = await api.getUser(username);
    const userData = getUserData(newFullUserData);
    if (!userData) {
      console.error('User not found');
      return;
    }
    const isUserAdded = checkUser(users, userData);
    if (isUserAdded) {
      console.error('User already added');
      return;
    }
    setUsers((previousState) => [...previousState, userData]);
  };

  return (
    <ThemeProvider theme={myDefaultTheme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <Form onSubmit={addNewUser} />
        <CardList users={users} />
      </Layout>
    </ThemeProvider>
  );
};
