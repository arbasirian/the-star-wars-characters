import React from 'react';
import { store } from 'redux/store';
import { CookiesHelper } from 'helpers';
import { DispatchHelper } from 'helpers';

const handleLogout = () => {
  const cookies = new CookiesHelper();
  cookies.removeAll();

  // Todo Handle Empty Store
};

export default handleLogout;
