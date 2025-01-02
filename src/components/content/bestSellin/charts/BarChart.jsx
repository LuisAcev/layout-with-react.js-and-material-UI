import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "S",
        uv: 4000,
        pv: 8500,
        amt: 2400
    },
    {
        name: "M",
        uv: 3000,
        pv: 6500,
        amt: 2210
    },
    {
        name: "T",
        uv: 2000,
        pv: 9700,
        amt: 2290
    },
    {
        name: "W",
        uv: 2780,
        pv: 5000,
        amt: 2000
    },
    {
        name: "   T",
        uv: 1890,
        pv: 4500,
        amt: 2181
    },
    {
        name: "V",
        uv: 2390,
        pv: 6500,
        amt: 2500
    },
    {
        name: "   S",
        uv: 3490,
        pv: 4700,
        amt: 2100
    }
];

const BarCharBestSelling = () => {
    return (
        <ResponsiveContainer width="100%" height={200} >
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5
                }}
                barSize={20}
                >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pv" fill="#13B497" background={{ fill: "#3B444D" }} />
            </BarChart>

        </ResponsiveContainer>

    );
}

export default BarCharBestSelling;