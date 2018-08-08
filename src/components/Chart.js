import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = ({data, color}) => {
    data = convertData(data)
    console.log(data)
    return(
        <LineChart width={600} height={200} color="white" data={data}>
            <Line type="monotone" dataKey="uv" stroke={color} />
            <Tooltip/>
            <XAxis dataKey="name" stroke="white"/>
            <YAxis stroke="white"/>
        </LineChart>
    )
}

export default Chart

function convertData(data){
    const result = data.map((item) => {
        return {name: '', uv: item}
    })
    return result
}