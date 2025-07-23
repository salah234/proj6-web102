import React, { useState } from "react";
import { Link } from 'react-router-dom'





const List = ({data}) => {
    const [searchDateTerm, setSearchDateTerm] = useState("");
    const [buttonTerm, setButtonTerm] = useState("");
    const [searchHumidityTerm, setSearchHumidityTerm] = useState("");
    if (!data || data.length == 0) {
        return <p>No Data Available</p>
    }
    const tempLessThanMaxFilter = data.filter((day) => (
        day.temp < day.max_temp
    ));

    const humidityThresholdFilter = tempLessThanMaxFilter.filter((day) => {
        const searchHumidityNumber = parseFloat(searchHumidityTerm);
        
        return searchHumidityTerm
            ? day.rh < searchHumidityNumber
            : true;
    });


    const dateFilter = humidityThresholdFilter.filter((day) => {
        return buttonTerm
            ? day.datetime.includes(buttonTerm)
            : true;
    });

    const finalFilter = dateFilter;


    return (
    <>
        <div className="list-container">

            <div className='list-header'>
                <input type='text' placeholder='Search by Date' value={searchDateTerm} onChange={(e) => setSearchDateTerm(e.target.value)} />
                <input
                    type='number'
                    placeholder='Search by Humidity (< %)'
                    value={searchHumidityTerm}
                    onChange={(e) => setSearchHumidityTerm(e.target.value)}
                />
                <button onClick={() => setButtonTerm(searchDateTerm)}>Search</button>

                
            </div>
        {/* For each day map to its info */}
        {finalFilter.length === 0 ? (
            <p>No Data Matching</p>
        ) : (
            <React.Fragment>
                <div className="column-rows">
                    <div><strong>📅 Day</strong></div>
                    <div><strong>☀️ Humidity</strong></div>
                    <div><strong>🌡️ Temp</strong></div>
                    <div><strong>☔ Precipitation</strong></div>
                    <div><strong>☔ Details</strong></div>
                </div>
                <div className="data-rows">
                    {finalFilter.slice(0, 10).map((day) => (
                        <div className="class-row" key={day.valid_date}>
                        <div>{day.datetime}</div>
                        <div>{day.rh}%</div>
                        <div>
                            {Math.trunc(day.temp)}°F
                        </div>
                        <div>{day.precip.toFixed(1)} in</div>
                        <div>
                            <Link to={`/details/${day.datetime}`}>🔗</Link>
                        </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )}
        </div>
    </>
    );
};

export default List;