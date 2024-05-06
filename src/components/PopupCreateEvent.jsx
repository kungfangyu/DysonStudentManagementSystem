import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

const PopupCreateEvent = ({ setEvents, events }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    description: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', start: '', end: '', description: '' }); // 清空表单
    setShowModal(false); // 关闭模态框
  };
  return (
    <Dialog>
      <DialogTitle>新增事件</DialogTitle>
      <DialogContent>
        <form>
          <label>标题:</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
          />
          <label>开始时间:</label>
          <input
            type="datetime-local"
            name="start"
            value={newEvent.start}
            onChange={handleInputChange}
          />
          <label>结束时间:</label>
          <input
            type="datetime-local"
            name="end"
            value={newEvent.end}
            onChange={handleInputChange}
          />
          <label>描述:</label>
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddEvent}>
            添加
          </button>
          <button type="button" onClick={() => setShowModal(false)}>
            取消
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupCreateEvent;
