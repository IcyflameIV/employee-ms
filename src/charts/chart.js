import { PieChart, Pie, Tooltip } from "recharts";
import React from "react";
const data = [
  { name: "Office A", value: 345 },
  { name: "Office B", value: 520 },
  { name: "Office C", value: 425 },
  { name: "Office D", value: 305 },
  { name: "Office E", value: 290 },
];
function Chart() {
  return (
    <div className="Chart">
      <PieChart
        width={500}
        height={400}
        margin={{
          top: 40,

          bottom: 5,
        }}
      >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label="Employees Distribution"
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart;
