import React, { useEffect, useState } from "react";
import axios from "axios";
import { Apis } from "../api/Api";

const Test = () => {
    const [testData, setTestData] = useState([]);

    const getTestData = () => {
        axios.get(Apis.WeatherForecast)
            .then(function (response) {
                console.log(response);
                setTestData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getTestData()
    }, [])

    return (
        <>
            <h2>Test data</h2>
            <ul>
                {testData.map(data =>
                    <li key={JSON.stringify(data)}>
                        {JSON.stringify(data)}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Test