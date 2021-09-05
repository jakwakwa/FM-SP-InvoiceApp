import * as React from 'react';
import logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.jpg';
import Moon from '../assets/icon-moon.svg';

const Nav = (): JSX.Element => {
  return (
    <div className="nav">
      <div className="navLayout">
        <div className="col col1">
          <div
            style={{
              width: '100%',
              background: '#7C5DFA',
            }}
          >
            <img alt="Logo" src={logo} />
          </div>
        </div>
        <div className="col col2">
          <div
            style={{
              width: '100%',
            }}
          >
            <img alt="Moon Icon" src={Moon} />
          </div>
        </div>
        <div className="col col3">
          <div>
            <img alt="Avatar" src={Avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
