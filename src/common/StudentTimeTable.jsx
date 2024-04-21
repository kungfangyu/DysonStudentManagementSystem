/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-17 19:15:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-21 16:10:10
 * @FilePath: /csc8019_team_project_frontend/src/common/StudentTimeTable.jsx
 */
import moment from 'moment';
import * as React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const StudentTimeTable = () => {
  const studentModuleEvents = [
    {
      title: 'CSC8011', //Module Name
      start: new Date('2024-04-22T13:00:00.000Z'),
      end: new Date('2024-04-22T14:30:00.000Z'),
      allDay: false,
    },
    {
      title: 'CSC9019',
      start: new Date('2024-04-24T13:00:00.000Z'),
      end: new Date('2024-04-24T15:30:00.000Z'),
      allDay: false,
    },
    {
      title: 'CSC8022',
      start: new Date('2024-04-25T15:00:00.000Z'),
      end: new Date('2024-04-25T16:30:00.000Z'),
      allDay: false,
    },
  ];

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
        events={studentModuleEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default StudentTimeTable;
