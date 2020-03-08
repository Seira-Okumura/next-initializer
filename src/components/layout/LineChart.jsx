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
const line = '#57d5ff';
const white = '#fff';
const gray = '#ddd';

export default function LineChart({
  width = 640,
  height = 280,
  margin = {
    right: 50,
    left: 50,
    top: 50,
    bottom: 50,
  }
}) {
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
        fill={white}
        rx={2}
      />
      <Group top={margin.top}>
        <LinePath
          data={data}
          x={x}
          y={y}
          stroke={line}
          strokeWidth={3}
        />
        {data.map((d, i) => {
          const cx = x(d);
          const cy = y(d);
          return (
            <g key={`line-point-${i}`}>
              <GlyphDot cx={cx} cy={cy} r={3} fill={line} />
              <GlyphDot cx={cx} cy={cy} r={2} fill={white} />
            </g>
          );
        })}
      </Group>
    </svg>
  );
}
