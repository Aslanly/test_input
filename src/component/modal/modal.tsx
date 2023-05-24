import React, { ChangeEvent, useEffect } from "react";
import ModalStore from '../../store/store';
import { observer } from 'mobx-react-lite';
import './modal.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Modal = () => {

  const { closeModal, isOpen, changeInput, addTodo, todoValue, saveToLocalStoreg } = ModalStore;


  const hendleClosModal = (e: any) => {
    closeModal(false);
  }

  const hendleDisabledClick = (e: any) => {
    e.stopPropagation()
  }

  const hendleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    changeInput(e.target.value)
  }

  const handleAddClick = () => {
    if (todoValue.trim()) {
      addTodo({id: Math.random(),
        text: todoValue.trim(),
        isChecked: false,
        activeButton: 'active',
      });
    }
    saveToLocalStoreg()
    changeInput('');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddClick()
    }
  };

  const handleKeyDownEsc = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      closeModal(false)
    }
  };

  return (
    <div className={isOpen ? 'Container' : ''} onClick={hendleClosModal}>
      <div className="ModalContent" onClick={hendleDisabledClick}>
        <TextField
          label="Описание"
          multiline
          rows={4}
          variant="filled"
          value={todoValue}
          onChange={hendleChangeInput}
          onKeyUpCapture={handleKeyDown}
          onKeyUp={handleKeyDownEsc}
        />
        <Button onClick={handleAddClick}>Добавить</Button>
      </div>
    </div>
  )
}

export default observer(Modal);