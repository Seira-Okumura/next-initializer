import React from 'react';

import NavigationMenu, { Navigation, ToggleList, Subtitle } from '../components/layout/NavigationMenu';
import Panel from '../components/layout/Panel';
import Table from '../components/layout/Table';
import NavBar from '../components/layout/NavBar';

export default () => {
  return (
    <>
      <Layout>
        <Panel className="account-table-panel">
          <Table />
        </Panel>
      </Layout>
      <style global jsx>{`
        .account-table-panel {
          top: 1rem;
          margin: 3rem;
          min-height: 800px;
        }
      `}</style>
    </>
  );
}
