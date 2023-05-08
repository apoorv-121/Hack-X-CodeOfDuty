import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './PersonalRecommend.css'

const PersonalRecommend = () => {

    const [reccomendata, setReccomendata] = useState(null)
    const [personalReccomendata, setpersonalReccomendata] = useState(null)
    const [aqi, setAqi] = useState(null)
    const [quality, setQuality] = useState(null)
    const [color, setColor] = useState(null)

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(async (res) => {

            const response = await axios.get(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${res.coords.latitude}&lon=${res.coords.longitude}&key=5d987a480bbf4894bef1059af925ace0&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`)
            setReccomendata(response.data.data.health_recommendations);
            setAqi(response.data.data.indexes.baqi.aqi)
            setQuality(response.data.data.indexes.baqi.category)
            setColor(response.data.data.indexes.baqi.color)
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
                <div className='aqiAlert' style={{ backgroundColor: color }}>
                    <h2>
                        AQI: {
                            aqi
                        }, {quality}
                        {/* AQI: {response.data.data.indexes.baqi.aqi} */}
                    </h2>
                </div>
                <div className='liveUpdate'>
                    {/* <p>{reccomendata && reccomendata.active}</p> */}
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