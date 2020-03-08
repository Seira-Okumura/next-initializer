import React from 'react';

import Layout from '../components/layout/Layout';
import LineChart from '../components/layout/LineChart';
import Panel from '../components/layout/Panel';

export default function Home() {
  return (
    <>
      <Layout>
        <Panel title="登録者数">
          <div className="chart-container">
            <LineChart />
          </div>
        </Panel>
      </Layout>
      <style global jsx>{`
        .card {
          padding: 1rem;
          margin: 4rem auto;
          width: fit-content;
        }
        .chart-container {
          width: fit-contents;
          margin: 1rem auto;
        }
      `}</style>
    </>
  );
}
