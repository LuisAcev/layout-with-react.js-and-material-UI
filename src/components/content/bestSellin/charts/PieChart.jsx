// import React from 'react';
import {  ResponsiveContainer } from 'recharts';
import React from "react";
import { PieChart, Pie } from "recharts";




const PieChartBestSelling = () => {

    const data02 = [
        { name: "A1", value: 35 },
        { name: "A2", value: 55 },
        { name: "B1", value: 10 },

    ];

    return (

        <ResponsiveContainer width="200%" height={200}>
            <PieChart width={200} height={200}>

                <Pie
                    data={data02}
                    dataKey="value"
                    cx={120}
                    cy={100}
                    innerRadius={50}
                    outerRadius={80}
                    fill="#13B497"
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartBestSelling;