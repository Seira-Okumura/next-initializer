import * as React from 'react';

import NavBar from './NavBar';
import NavigationMenu from './NavigationMenu';

export default ({ children }) => {
  return (
    <>
      <div className="content">
        <NavBar />
        <NavigationMenu />
        {children}
      </div>
      <style jsx>{`
        .content {
          padding-left: 215px;
          padding-top: 67px;
          max-width: 100%;
          overflow: auto;
        }
      `}</style>
    </>
  );
}
