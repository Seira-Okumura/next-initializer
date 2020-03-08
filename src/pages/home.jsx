import React from 'react';

import Layout from '../components/layout/Layout';
import ReportCard from '../components/layout/ReportCard';
import LineChart from '../components/layout/LineChart';
import Panel from '../components/layout/Panel';

export default function Home() {
  return (
    <>
      <Layout>
        <div style={{display: "flex"}}>
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
          </div>
        <Panel title="登録者数">
          <div className="chart-container">
            <LineChart />
          </div>
        </Panel>
      </Layout>
      <style global jsx>{`
        .card {
          padding: 1rem;
          margin: 1.5rem;
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
