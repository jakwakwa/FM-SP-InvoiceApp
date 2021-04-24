import * as React from 'react';
import logo from './assets/logo.svg';
import Illustration from './assets/illustration-empty.svg';
import Avatar from './assets/image-avatar.jpg';
import Moon from './assets/icon-moon.svg';

export default function Nav() {
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
            <img src={logo} />
          </div>
        </div>
        <div className="col col2">
          <div
            style={{
              width: '100%',
            }}
          >
            <img src={Moon} />
          </div>
        </div>
        <div className="col col3">
          <div>
            <img src={Avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
