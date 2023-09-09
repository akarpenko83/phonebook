import Router from 'next/router';
import Cookies from 'js-cookie';

export const setToken = data => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.username);
  Cookies.set('jwt', data.jwt);
  if (Cookies.get('username')) {
    Router.reload('/');
  }
};

export const unsetToken = data => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('username');
  Cookies.remove('jwt');

  Router.reload('/');
};

export const getUserFromLocalCookie = () => {
  return Cookies.get('username');
};
