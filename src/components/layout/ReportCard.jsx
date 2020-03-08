import React from 'react';

import Panel from './Panel';

export default function ReportCard({
  title,
  value,
  fluctuation,
}) {
  return (
    <>
      <Panel>
        <div className="flex report-content">
          <div>
            <div>登録者数</div>
            <div>258</div>
            <div>
              <span>10%</span>
              <span>Increase</span>
            </div>
          </div>
          <img
            src="https://i2.wp.com/is-factory.com/wp-content/uploads/2014/07/-2014-07-15-18.24.16-e1405421299511.jpg"
            width="100"
            height="100"
          />
        </div>
      </Panel>
      <style jsx>{`
        .report-content {
          justify-content: space-between;
          width: 24rem;
        }
        .flex {
          display: flex;
        }
        .reportcard-width {
          width: 30rem;
        }
      `}</style>
    </>
  )
}
