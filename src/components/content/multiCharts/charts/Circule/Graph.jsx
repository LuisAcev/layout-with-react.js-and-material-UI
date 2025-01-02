
import React from "react";
import { PieChart, Pie, Cell, } from "recharts";


const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 450 },
  { name: "Group D", value: 600 }
];
const COLORS = ["#E63F16", "#00C49F", "#FFBB28", "#0088FE"];

export const Graph = () => {
    
  return (
   
    
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx={'auto'}
        cy={50}
        innerRadius={20}
        outerRadius={40}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
 
    </PieChart>

  );
}