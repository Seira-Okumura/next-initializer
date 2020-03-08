import React from 'react';

import LineChart from '../components/layout/LineChart';
import Panel from '../components/layout/Panel';

export default function Home() {
  return (
    <>
      <Panel title="登録者数">
        <div className="chart-container">
          <LineChart />
        </div>
      </Panel>
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
