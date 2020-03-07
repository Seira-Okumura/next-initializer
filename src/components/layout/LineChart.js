import React from 'react';
import { Group } from '@vx/group';
import { GlyphDot } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';

const data = genDateValue(15);

// accessors
const date = d => d.date;
const value = d => d.value;

// scales
const xScale = scaleTime({
  domain: [Math.min(...data.map(date)), Math.max(...data.map(date))]
});
const yScale = scaleLinear({
  domain: [0, Math.max(...data.map(value))]
});

// positions
const x = d => xScale(date(d));
const y = d => yScale(value(d));

// colors
const primary = '#26abe3';
const secondary = '#d8d8d8';
const contrast = '#21282f';

const height = 500;
const width = window.innerWidth - 42;
const margin = {
  right: 100,
  left: 100,
  top: 100,
  bottom: 100
};

export default function LineChart() {
  // bounds
  const xMax = width - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale range to match bounds
  xScale.range([margin.left, xMax]);
  yScale.range([yMax, 0]);

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={secondary}
        rx={14}
      />
      <Group top={margin.top}>
        <LinePath
          data={data}
          x={x}
          y={y}
          stroke={primary}
          strokeWidth={2}
        />
        {data.map((d, i) => {
          const cx = x(d);
          const cy = y(d);
          return (
            <g key={`line-point-${i}`}>
              <GlyphDot cx={cx} cy={cy} r={3} fill={contrast} />
            </g>
          );
        })}
      </Group>
    </svg>
  );
}
