import React from "react";
import {useParams }from 'react-router-dom'

{/* UseParams -> hook to use access the dynamic segements of URL */}

function Details({data}) {
    const {dateID} = useParams(); {/* Use the date to access*/}
    
    if (!data || data.length === 0) {
        return <p>No Data Found</p>
    }

    const selectedDates = data.filter(day => day.datetime === dateID)
    if (selectedDates.length === 0) {
        return <p>No weather data has been found for {dateID} </p>
    }
    const selectedDate = selectedDates[0];


    return (
        <div className="details-card">
            <h2>Date: {selectedDate.datetime}</h2>
            <p>Average Pressure (mb) : {selectedDate.pres}</p>
            <p>Average sea level pressure (mb): {selectedDate.slp} </p>
            <p>The dew point is {selectedDate.dewpt}. This city is located in the north central region of the United States, famously called the midwest. Finally, 
                the average cloud coverage is {selectedDate.clouds} %, indicating whether it's fun to go outside or not!
            </p>
        </div>
    )





}

export default  Details;