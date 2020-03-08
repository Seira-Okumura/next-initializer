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
          padding-left: 200px;
          padding-top: 52px;
        }
      `}</style>
    </>
  );
}
