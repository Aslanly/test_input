import { makeAutoObservable } from 'mobx';

interface Task {
    id: number;
    text: string;
}

class ModalStore {

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
        localStorage.setItem('tasklist', JSON.stringify(this.taskList));
    }

    loadFromLocalStoreg = () => {
        const storedTasks = localStorage.getItem('taskList');
        if (storedTasks) {
            this.taskList = JSON.parse(storedTasks);
        }
    }

}

export default new ModalStore();