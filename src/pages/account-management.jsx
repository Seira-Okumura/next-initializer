import React from 'react';

import NavigationMenu, { Navigation, ToggleList, Subtitle } from '../components/layout/NavigationMenu';
import Panel from '../components/layout/Panel';
import Table from '../components/layout/Table';
import Navbar from '../components/layout/NavBar';

export default () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <NavigationMenu />
        <Panel className="account-table-panel">
          <Table />
        </Panel>
      </div>
      <style global jsx>{`
        .content {
          padding-left: 200px;
          padding-top: 40px;
        }
        .account-table-panel {
          top: 1rem;
          margin: 3rem;
          min-height: 800px;
        }
      `}</style>
    </>
  );
}
