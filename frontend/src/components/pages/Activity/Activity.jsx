import React, { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import axios from "axios";
const Activity = () => {
  const [activityList, setActivityList] = useState([]);
  const [points, setPoints] = useState(localStorage.getItem("points"));
  const getData = async () => {
    const response = await axios.get("http://localhost:8000/activities");
    setActivityList(response.data);
    let sum = 0;
    response.data.forEach((activity) => {
      if (activity.completed) sum += parseInt(activity.points);
    });
    localStorage.setItem("points", sum);
    setPoints(sum);
  };

  useEffect(() => {
    getData();
  }, [points]);

  return (
    <>
      <div className="day-container">
        {activityList.map((activity) => {
          return (
            <ActivityCard
              onRefresh={getData}
              key={activity._id}
              activity={activity}
            />
          );
        })}
      </div>
    </>
  );
};

export default Activity;
