import React from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { GlyphDot } from '@vx/glyph';
import { Grid } from '@vx/grid';
import { Group } from '@vx/group';
import { LinePath, Bar, Line } from '@vx/shape';
import { genDateValue } from '@vx/mock-data';
import { localPoint } from '@vx/event';
import { scaleTime, scaleLinear } from '@vx/scale';
import { Tooltip, withTooltip } from '@vx/tooltip';
import dayjs from 'dayjs';
import { bisect } from 'd3-array';

const OffsetLeftAxis = 40;
// colors
const line = '#57d5ff';
const white = '#fff';
const gray = '#ddd';

const mock = genDateValue(20)
  .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

const defaultMargin = {
  right: 50,
  left: 50,
  top: 10,
  bottom: 40,
};

const axisLabelProps = {
  fill: gray,
  textAnchor: 'middle',
  fontSize: 12,
  fontFamily: 'Arial'
};

const tickLabelProps = (value, index) => ({
  fill: gray,
  textAnchor: 'end',
  fontSize: 10,
  fontFamily: 'Arial',
  dx: '-0.25em',
  dy: '0.25em'
});

const LineChart = ({
  data = mock, // should be sorted by date
  height = 200,
  hideTooltip,
  margin = defaultMargin,
  showTooltip,
  tooltipData,
  tooltipLeft,
  tooltipTop,
  width = 600,
}) => {
  const { xScale, yScale, x, y, xMax, yMax, unixDateArray } = React.useMemo(() => {
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
    // bounds
    const xMax = width - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // update scale range to match bounds
    xScale.range([margin.left, xMax]);
    yScale.range([yMax, 0]);

    const unixDateArray = data.map(d => dayjs(d.date).unix());
    return { xScale, yScale, x, y, xMax, yMax, unixDateArray };
  }, [data, margin, width, height]);

  const handleTooltip = React.useCallback((event) => {
    const { x, y } = localPoint(event.target.ownerSVGElement, event);
    const x0 = xScale.invert(x);
    const index = bisect(unixDateArray, dayjs(x0).unix()) - 1;
    if (!data[index]) { return; }
    showTooltip({
      tooltipData: data[index],
      tooltipLeft: xScale(data[index].date),
      tooltipTop: y,
    });
  }, [showTooltip, xScale, data, unixDateArray]);

  return (
    <>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={white}
          rx={2}
        />
        <AxisLeft
          top={0}
          left={OffsetLeftAxis}
          scale={yScale}
          numTicks={6}
          labelProps={axisLabelProps}
          stroke="#fff"
          tickStroke="#fff"
          tickLabelProps={tickLabelProps}
        />
        <AxisBottom
          top={height - margin.bottom}
          stroke="#fff"
          left={0}
          scale={xScale}
          numTicks={7}
          stroke={gray}
          tickStroke="#fff"
          tickLabelProps={tickLabelProps}
        />
        <Group top={margin.top} left={0}>
          <Grid
            top={0}
            left={OffsetLeftAxis}
            xScale={xScale}
            yScale={yScale}
            stroke={gray}
            width={xMax}
            height={yMax}
            numTicksRows={6}
            numTicksColumns={7}
          />
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
          <Bar
            x={OffsetLeftAxis}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            data={data}
            onMouseMove={handleTooltip}
            onMouseLeave={hideTooltip}
            onTouchEnd={hideTooltip}
            onTouchMove={handleTooltip}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: x(tooltipData), y: 0 }}
                to={{ x: x(tooltipData), y: yMax }}
                stroke="#eee"
                strokeWidth={2}
                style={{ pointerEvents: 'none' }}
              />
              <GlyphDot cx={x(tooltipData)} cy={y(tooltipData)} r={5} fill={line} />
              <GlyphDot cx={x(tooltipData)} cy={y(tooltipData)} r={3} fill={white} />
            </g>
          )}
        </Group>
      </svg>
      {tooltipData && (
        <div>
          <Tooltip
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
            style={{
              color: 'white',
              backgroundColor: 'black',
              opacity: '0.7',
            }}>
            <p>{tooltipData.value}</p>
          </Tooltip>
        </div>
      )}
    </>
  );
}

export default withTooltip(LineChart);
