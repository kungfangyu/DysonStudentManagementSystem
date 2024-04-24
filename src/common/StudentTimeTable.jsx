/*
 * @Author: Fangyu Kung
 * @Date: 2024-03-17 19:15:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-04-21 16:50:14
 * @FilePath: /csc8019_team_project_frontend/src/common/StudentTimeTable.jsx
 */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const StudentTimeTable = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const studentModuleEvents = [
    {
      title: 'CSC8011', //Module Name
      start: new Date('2024-04-22T13:00:00.000Z'),
      end: new Date('2024-04-22T14:30:00.000Z'),
      allDay: false,
      location: 'FDC 1001',
    },
    {
      title: 'CSC9019',
      start: new Date('2024-04-24T13:00:00.000Z'),
      end: new Date('2024-04-24T15:30:00.000Z'),
      allDay: false,
      location: 'FDC 1001',
    },
    {
      title: 'CSC8022',
      start: new Date('2024-04-25T15:00:00.000Z'),
      end: new Date('2024-04-25T16:30:00.000Z'),
      allDay: false,
      location: 'FDC 1001',
    },
  ];

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
      title: `${event.title} - ${event.location}`,
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
        onSelectEvent={handleSelectEvent} // 處理選擇事件的動作
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
              Location: {selectedEvent?.location}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Start: {moment(selectedEvent?.start).format('YYYY-MM-DD HH:mm')}
            </Typography>
            <Typography variant="subtitle1" component="div">
              End: {moment(selectedEvent?.end).format('YYYY-MM-DD HH:mm')}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentTimeTable;
