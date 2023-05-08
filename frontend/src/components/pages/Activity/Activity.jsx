import React, { useState, useEffect } from "react";
import {
  parse,
  eachDayOfInterval,
  endOfMonth,
  format,
  parseISO,
  startOfToday,
} from "date-fns";
import ActivityCard from "./ActivityCard";
import axios from "axios";
const Activity = () => {
  const [activityList, setActivityList] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/activities");
    setActivityList(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const currentMonth = format(startOfToday(), "MMM-yyyy");
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  console.log(activityList);
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
