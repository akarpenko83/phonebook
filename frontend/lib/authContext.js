// TODO: Replace his code with Redux analog

import { createContext, useContext, useEffect, useState } from 'react';
import { getUserFromLocalCookie } from '../lib/auth';

let userState;

const User = createContext({ user: null, loadings: false });

export const UserProvider = ({ value, children }) => {
  const { user } = value;

  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);
  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
  const [user, setUser] = useState({
    user: userState || null,
    loading: userState === undefined,
  });

  useEffect(() => {
    if (userState !== undefined) {
      return;
    }
    let isMounted = true;

    const user = getUserFromLocalCookie();
    if (isMounted) {
      setUser({ user, loading: false });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return user;
};
