import React from "react";


{/* Storing simple info (hold pieces of information */}


const Card = ({data, value, type}) => {
    if (!data || data.length == 0) {
        return <p>No Data Available</p>
    }
    const date = new Date()
    const dateToday = new Date(date)
    dateToday.setDate(date.getDate() - 1)

    const todayDate = dateToday.toISOString().split("T")[0]


    const todayData = data.find((day) => day.datetime === todayDate)

    if (!todayData) {
        console.log(todayData)
        return <p>No today data found</p>
    }

    return (
    <>
    <div className="card-container">
    {/* For each day map to its info */}
        {value === "max_temp" || value === "min_temp" || value === "temp" ? (
            <>
            <div className="card">
             <p>{Math.trunc(todayData[value] * 9/5 + 32)}°F</p>
             <p>{type}</p>
             </div>
            </>
        ): (
            value === "wind_spd" ? (
                <>
                <div className="card">
                    <p>{todayData[value]} mph</p>
                    <p>{type}</p>
                </div>
            </>
        ):(
            <>
            <div className="card">
                <p>{todayData[value]}</p>
                <p>{type}</p>
            </div>
            </>
        )
        )}
    </div>
    </>
    );
};

export default Card;


