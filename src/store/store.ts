
import { makeAutoObservable } from 'mobx';

interface Task {
    id: number;
    text: string;
    status: boolean;
    isChecked: boolean;
}

class ModalStore {

    showActive: boolean = false;

    todoValue: string = '';
    isOpen = false;

    taskList: Task[] = []

    constructor() {
        makeAutoObservable(this)
    }

    openModal = (val: boolean) => {
        this.isOpen = val;
    }

    closeModal = (val: boolean) => {
        this.isOpen = val;
    }

    changeInput = (value: string) => {
        this.todoValue = value
    }

    removeItemById = (id: number) => {
        this.taskList = this.taskList.filter((item) => item.id !== id);
    }

    addTodo = (todo: Task) => {
        this.taskList.push(todo);
    }

    saveToLocalStoreg = () => {
        localStorage.setItem('taskList', JSON.stringify(this.taskList));

    }

    getFromLocalStoreg = () => {
        const storedTasks = localStorage.getItem('taskList');
        if (storedTasks) {
            this.taskList = JSON.parse(storedTasks);
        };
    }

    changeStatusTask = (id: number) => {
        const task = this.taskList.find((item) => item.id === id);
        if (task) {
            task.isChecked = !task.isChecked;
            console.log(task.isChecked)
        }
        this.saveToLocalStoreg();
    };


}

export default new ModalStore();