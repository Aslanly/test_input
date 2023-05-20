import React, { useEffect, useState } from "react";
import ModalStore from '../../store/store';
import { observer } from 'mobx-react-lite';
import DeleteIcon from '@mui/icons-material/Delete';
import './tasks.css';
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


const GetTaskList = () => {

    const { taskList, saveToLocalStoreg, getFromLocalStoreg, changeStatusTask } = ModalStore

    const handleRemove = (id: number) => {
        ModalStore.removeItemById(id)
        saveToLocalStoreg()
    };

    useEffect(() => {
        getFromLocalStoreg()
    }, [])

    const handleCheckboxChange = (id: number) => {
        changeStatusTask(id);
    };

    return (
        <div className="Container_tasks">
            {taskList.map((task) => (
                <div className="task" key={task.id}>
                    <div>{task.text}</div>
                    <div>
                        <Checkbox onChange={() => handleCheckboxChange(task.id)}/>
                        <Button onClick={() => handleRemove(task.id)}><DeleteIcon /></Button>
                    </div>
                </div>
            ))}
        </div>
    )

}
export default observer(GetTaskList);