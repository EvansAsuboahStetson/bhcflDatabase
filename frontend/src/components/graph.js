import React from "react";
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LabelList, ResponsiveContainer
} from "recharts";

const Graph = ({ data, xDataKey, yDataKey, chartType, colors }) => {
  // Group data by the xDataKey and yDataKey
  const groupedData = data.reduce((acc, item) => {
    const key = item[xDataKey];
    if (!acc[key]) {
      acc[key] = {};
    }
    const measureValue = item[yDataKey];
    acc[key][measureValue] = (acc[key][measureValue] || 0) + 1;
    return acc;
  }, {});

  let totalCount = 0;
  const chartData = Object.entries(groupedData).flatMap(([key, measures]) =>
    Object.entries(measures).map(([measure, count]) => {
      totalCount += count;
      return {
        [xDataKey]: key,
        [yDataKey]: measure,
        count,
      };
    })
  );

  // Add percentage to each entry in the chart data
  const chartDataWithPercentage = chartData.map(item => ({
    ...item,
    percentage: ((item.count / totalCount) * 100).toFixed(2) + '%',
  }));
  const renderBarLabel = (props) => {
    const { x, y, width, height, value, index } = props;
    const item = chartDataWithPercentage[index];
    const label = item[xDataKey] ? item[xDataKey].substring(0, 3) : '';

    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {label}
    </text>;
  };
  const colorMap = {};
  data.forEach((item, index) => {
    const category = item[xDataKey];
    if (!colorMap[category]) {
      colorMap[category] = colors[index % colors.length];
    }
  });

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="120%" height={500}>
            <BarChart data={chartDataWithPercentage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={yDataKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name={xDataKey}>
                {chartDataWithPercentage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorMap[entry[xDataKey]]} />
                ))}
                <LabelList dataKey="count" content={renderBarLabel} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={900}>
          <PieChart>
            <Pie
              dataKey="count"
              isAnimationActive={true}
              data={chartDataWithPercentage}
              outerRadius={150}
              fill={colors[0]}
              label={(entry) => `${entry[xDataKey]} - ${entry[yDataKey]}: ${entry.percentage}`}
            >
              {chartDataWithPercentage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Custom Chart</h1>
      {renderChart()}
    </div>
  );
};

Graph.defaultProps = {
  chartType: 'bar',
  colors: ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00', '#000000', '#ffffff'],
};

export default Graph;
