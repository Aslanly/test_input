import React, { useEffect, useState } from "react";
import ModalStore from '../../store/store';
import { observer } from 'mobx-react-lite';
import DeleteIcon from '@mui/icons-material/Delete';
import './tasks.css';
import { Button } from "@mui/material";


const GetTaskList = () => {

    const { taskList, loadFromLocalStoreg } = ModalStore

    useEffect(() => {
        loadFromLocalStoreg()
    }, [])

    const handleRemove = (id: number) => {
        ModalStore.removeItemById(id)
    };

    return (
        <div className="Container_tasks">
            {taskList.map((task) => (
                <div className="task" key={task.id}>
                    <div>{task.text}</div>
                    <Button onClick={() => handleRemove(task.id)}><DeleteIcon /></Button>
                </div>
            ))}
        </div>
    )
}

export default observer(GetTaskList);