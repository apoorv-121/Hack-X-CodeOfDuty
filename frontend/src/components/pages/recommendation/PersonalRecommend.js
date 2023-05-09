import React, { useEffect, useState } from 'react'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
    AreaChart,
} from "recharts";

import axios from 'axios'
import './PersonalRecommend.css'

const PersonalRecommend = () => {

    const [reccomendata, setReccomendata] = useState(null)
    const [personalReccomendata, setpersonalReccomendata] = useState(null)
    const [aqi, setAqi] = useState(null)
    const [quality, setQuality] = useState(null)
    const [color, setColor] = useState(null)
    const [chartdata, setChartData] = useState(null)

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(async (res) => {

            const response = await axios.get(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${res.coords.latitude}&lon=${res.coords.longitude}&key=5d987a480bbf4894bef1059af925ace0&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`)
            // console.log(response.data.data);
            setReccomendata(response.data.data.health_recommendations);
            setAqi(response.data.data.indexes.ind_cpcb.aqi)
            setQuality(response.data.data.indexes.baqi.category)
            setColor(response.data.data.indexes.baqi.color)
            const arr = Object.entries(response.data.data.pollutants).map((e) => ({ [e[0]]: e[1] }));
            // console.log(arr);
            const newArr = arr.map((val) => {
                return { gases: Object.keys(val)[0], amount: Object.values(val)[0].concentration.value }
            });
            // console.log(newArr);
            setChartData(newArr);
        })

    }, [])

    const handleSelect = (e) => {
        e.preventDefault()
        if (e.target.value !== "") {
            setpersonalReccomendata(reccomendata[e.target.value]);
        }
    }

    return (
        <div className='reccomend_main'>

            <div className='reccomend_main_child'>
                {chartdata &&
                    <div className='chart'>
                        <BarChart width={730} height={250} data={chartdata}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="gases" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="amount" fill="#eb3492" />
                            
                        </BarChart>
                    </div>
                }

                <div className='aqiAlert' style={{ backgroundColor: color, opacity: 0.7, color: 'white' }}>
                    <h2>
                        AQI: {
                            aqi
                        }, {quality}
                        {/* AQI: {response.data.data.indexes.baqi.aqi} */}
                    </h2>
                </div>
                <div className='liveUpdate'>

                    <p> {reccomendata && reccomendata.active} </p>
                </div>
                <div className="takedata">
                    <select onChange={handleSelect} >
                        <option value="">Select</option>
                        <option value="children">Children</option>
                        <option value="elderly">Elder</option>
                        <option value="heart_diseases">Heart Patient</option>
                        <option value="lung_diseases">Lung Disease</option>
                        <option value="pregnant_women">Pregnant</option>
                    </select>
                </div>

                <h3>{personalReccomendata}</h3>

            </div>

        </div>
    )
}

export default PersonalRecommend