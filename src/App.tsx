import React from 'react';
import './App.css';
import Modal from './component/modal/modal';
import ModalStore from './store/store';
import { observer } from 'mobx-react-lite';
import Button from '@mui/material/Button';
import GetTaskList from './component/taskList/TaskList';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect } from 'react';

function App() {

  const { isOpen, openModal, changeActiveButton, changeAllButton } = ModalStore;

  const handleActiveTask = (props: string) => {
    changeActiveButton('active')
  }

  const handleAllTask = (props: string) => {
    changeAllButton('all')
  }

  return (
    <div className="App">
      <div className='ButtonGroup'>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => handleActiveTask('active')}><div className='Button'>АКТИВНЫЕ</div></Button>
          <Button onClick={() => handleAllTask('all')}><div className='Button'>ВСЕ ЗАДАЧИ</div></Button>
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
