/*
 * @Author: Fangyu Kung
 * @Date: 2024-05-01 23:43:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-02 00:12:27
 * @FilePath: /csc8019_team_project_frontend/src/components/EditStaffTimeTables.jsx
 */
import Button from '@mui/material/Button';
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PopupCreateEvent from './PopupCreateEvent';
const localizer = momentLocalizer(moment);

const EditStaffTimeTables = () => {
  const [events, setEvents] = useState([]);
  const staffModuleEvents = [
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

  return (
    <>
      <Calendar
        localizer={localizer}
        events={staffModuleEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Create Event
      </Button>
      <PopupCreateEvent setEvents={setEvents} events={events} />
    </>
  );
};

export default EditStaffTimeTables;
