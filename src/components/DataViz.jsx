import React from "react";
import {LineChart, BarChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar} from "recharts"




function DataViz({data}) {
    if (!data || data.length === 0) {
        return <p>Loading chart...</p>;
      }
    return (
        <div className="data-container">
            <div className="bar-container">
                <h3>Humidity for last 10 days</h3>
                <BarChart width={400} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="datetime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rh" fill="##013220" name={"Relative Humidity (%)"} />
                </BarChart>
            </div>
            <div className="line-container">
                <h3>Temperature Change for last 10 days</h3>
                <LineChart width={400} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="datetime" tick={5}></XAxis> {/* Datakey tells where within data (JSON result in API) to look in*/}
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type={"monotone"} dataKey={"temp"} stroke="#8884d8" name={"Temperature (°F)"}/>

                </LineChart>


            </div>
        </div>
    )


}

export default DataViz;
