import { useRef, useState } from "react";
import Task from "./Task";

let editask = undefined;

export default function ToDoList() {

    const [tasklist, setTasklist] = useState(["Wake up at 8 am", "Do laundry", "watch series"])
    // const[inputTask,setInputTask] = useState("");
    const inputRef = useRef();
    const addRef = useRef();

    function addTask() {
        let newtask = inputRef.current.value
        if (addRef.current.textContent === "Add") {
            console.log(newtask)
            inputRef.current.value = "";
            newtask != "" ? setTasklist((prev) => [...prev, newtask]) : null
        }
        else {
            addRef.current.textContent = "Add"
            setTasklist((prev) => {
              return  prev.map((ele, i) => {
                    if (editask == i)
                        return newtask;
                    return ele;
                })
            })
            inputRef.current.value = "";
        }
    }

    function deleteTask(index) {
        console.log(index)
        setTasklist((prev) => {
            return prev.filter((ele, i) => {
                if (i != index) return ele
            })
        })
    }

    function editTask(index) {
        addRef.current.textContent = "Update"
        inputRef.current.value = tasklist[index]
        console.log(index)
        editask = index;

    }
    return (
        <div className="section">
            <div className="container">
                <div className="input">
                    <input ref={inputRef} type="text" />
                    <button ref={addRef} className="add-btn" onClick={addTask}>Add</button>
                </div>
                <h1 style={{ color: "white" }}>Tasks:</h1>
                <div className="display">
                    {tasklist.map((ele, i) => {
                        return <div key={i} className="task">
                            <h2>{ele}</h2>
                            <button onClick={() => editTask(i)} className="edit-btn">Edit</button>
                            <button onClick={() => deleteTask(i)} className="delete-btn">Del</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}