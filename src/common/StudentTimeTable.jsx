/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-17 19:15:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-04 15:17:47
 * @FilePath: /csc8019_team_project_frontend/src/common/StudentTimeTable.jsx
 */
import moment from 'moment';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getStudentTimeTable } from '../api/timetable';
import { SIGNIN_URL } from '../data/data';
import { parseJwt } from '../helpers/jwt';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

const localizer = momentLocalizer(moment);

const StudentTimeTable = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchStudentModules = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token) {
        const parseToken = parseJwt(token);
        const response = await getStudentTimeTable(parseToken.userID);
        if (Array.isArray(response)) {
          const transformedResponse = response.map((item) => {
            const {
              moduleID,
              lessonType,
              startTime: start,
              endTime: end,
              ...rest
            } = item;
            const title = `${moduleID} - ${lessonType}`;
            return {
              ...rest,
              title,
              start: new Date(start),
              end: new Date(end),
            };
          });
          console.log(transformedResponse);
          setEvents(transformedResponse);
        } else {
          console.log('apiResponse is not an array');
        }
      } else {
        window.location.href = SIGNIN_URL;
      }
    } catch (error) {
      console.error('Error fetching student modules:', error);
    }
  }, []);

  useEffect(() => {
    fetchStudentModules();
  }, [fetchStudentModules]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const eventPropGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: '#3f50b5',
      color: '#fff',
      borderRadius: '0px',
      border: 'none',
    };

    if (event.isMine) {
      newStyle.backgroundColor = '#3f50b5';
    }

    return {
      className: '',
      style: newStyle,
      title: `${event.title}`,
    };
  };

  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter}
        onSelectEvent={handleSelectEvent}
      />

      <Dialog
        open={!!selectedEvent}
        onClose={handleCloseModal}
        aria-labelledby="event-details"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography id="event-details" variant="h5" component="p">
            {selectedEvent?.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="subtitle1" component="div">
              Start: {moment(selectedEvent?.start).format('YYYY-MM-DD HH:mm')}
            </Typography>
            <Typography variant="subtitle1" component="div">
              End: {moment(selectedEvent?.end).format('YYYY-MM-DD HH:mm')}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentTimeTable;
