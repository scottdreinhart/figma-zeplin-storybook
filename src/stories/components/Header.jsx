import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/cellwatch_logo.png'; // Tell webpack this JS file uses this image
import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo} height="60px" alt="Logo" />;
      </div>
      <div>
        {user ? (
          <Button size="sm" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="sm" onClick={onLogin} label="Log in" />
            <Button size="sm" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
