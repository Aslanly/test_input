
import { makeAutoObservable } from 'mobx';

interface Task {
    id: number;
    text: string;
    isChecked: boolean;
    activeButton: 'active' | 'all',
}

class ModalStore {

    filteredTaskList: Task[] = [];
    isChecked = false;
    todoValue: string = '';
    isOpen = false;
    taskList: Task[] = []
    

    constructor() {
        makeAutoObservable(this)
        this.getFromLocalStoreg();
        this.getFromLocalStoregValueCheckbox();
        this.changeActiveButton('active');
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
        this.filteredTaskList = this.filteredTaskList.filter((item) => item.id !== id);
    }

    addTodo = (todo: Task) => {
        this.taskList.push(todo);
        if (!todo.isChecked) {
            this.filteredTaskList.push(todo);
          }
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

    getFromLocalStoregValueCheckbox = () => {
        const storedCheckbox = localStorage.getItem('checkbox');
        if (storedCheckbox !== null) {
            this.isChecked = JSON.parse(storedCheckbox);
        }
    }

    changeStatusTask = (id: number) => {
        const task = this.taskList.find((item) => item.id === id);
        if (task) {
            task.isChecked = !task.isChecked;
            this.saveToLocalStoreg();
        }
    };

    changeAllButton = (props: string) => {
        if (props === 'all') {
            this.filteredTaskList = this.taskList;
        }   
    }

    changeActiveButton = (props:string) => {
        if (props === 'active') {
            this.filteredTaskList = this.taskList.filter((task) => !task.isChecked)
        }
    }
}   

export default new ModalStore();