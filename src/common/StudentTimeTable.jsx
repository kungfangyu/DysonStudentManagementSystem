/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-17 19:15:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-17 20:00:28
 * @FilePath: /csc8019_team_project_frontend/src/common/StudentTimeTable.jsx
 */
import moment from 'moment';
import * as React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const StudentTimeTable = () => {
  const eventPropGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: 'lightblue',
      color: 'black',
      borderRadius: '0px',
      border: 'none',
    };

    if (event.isMine) {
      newStyle.backgroundColor = 'tomato';
    }

    return {
      className: '',
      style: newStyle,
    };
  };

  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        // events={ownerData}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default StudentTimeTable;
