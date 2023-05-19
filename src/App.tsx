import React, { useState } from 'react';
import './App.css';
import Modal from './component/modal/modal';
import ModalStore from './store/store';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import GetTaskList from './component/taskList/TaskList';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {

  const { isOpen, openModal } = ModalStore;

  return (
    <div className="App">
      <div className='ButtonGroup'>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button><div className='Button'>АКТИВНЫЕ</div></Button>
          <Button><div className='Button'>ВСЕ ЗАДАЧИ</div></Button>
          <Button onClick={() => { openModal(true) }}><div className='Button'>НОВАЯ ЗАДАЧА</div></Button>
        </ButtonGroup>
      </div>
      <GetTaskList />
      <div>
        {isOpen && <Modal />}
      </div>
    </div>
  );

}

export default observer(App);
