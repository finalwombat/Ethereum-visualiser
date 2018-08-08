import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

import {convertData} from '../utils'

const Chart = ({data, color}) => {
    data = convertData(data)
    return(
        <LineChart width={600} height={200} color="white" data={data}>
            <Line type="monotone" dataKey="transactions" stroke={color} />
            <Tooltip/>
            <XAxis dataKey="name" stroke="white"/>
            <YAxis stroke="white"/>
        </LineChart>
    )
}

export default Chart

