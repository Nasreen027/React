import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const submitTaskFormHandler = (event) => {
    event.preventDefault();
    if (!tasks) {
      alert("Please enter task");
      return;
    } else {
      setTaskList([...taskList, tasks]);
      setTasks("");
    }
  };
  const clearTasksHandler = (event) => {
    event.preventDefault();
    if (confirm("Are you sure?")) {
      setTaskList([]);
    }
  }
  const removeTaskHandler = (index) => {
    // console.log(index,'index');
    if (window.confirm("Are you sure?")) {
      const tempTaskList = [...taskList];
      tempTaskList.splice(index, 1);
      setTaskList(tempTaskList);
      alert("Item successfully deleted");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div id="main" className="card">
              <div className="card-content">
                <span className="card-title">Task List</span>
                <form id="task-form" onSubmit={submitTaskFormHandler}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="task"
                        id="task"
                        value={tasks}
                        onChange={(event) => setTasks(event.target.value)}
                      />
                      <label>New Task</label>
                    </div>
                  </div>
                  <input type="submit" value="Add Task" className="btn" />
                </form>
              </div>
              <div className="card-action">
                <h5 id="task-title">Tasks</h5>
                <div className="input-field col s12">
                  <input type="text" name="filter" id="filter" value={filterValue} onChange={(event) => setFilterValue(event.target.value)} />
                  <label>Filter Task</label>
                </div>
                <ul className="collection">
                  {taskList.filter(task => task.includes(filterValue.toLowerCase())).map((task, index) =>
                    <li className="collection-item" key={index}>
                      {task}
                      <a href="#" className="delete-item secondary-content" onClick={() => removeTaskHandler(index)}>Delete
                        <i className="fa fa-remove"></i>
                      </a>
                    </li>
                  )}
                </ul>
                <a className="clear-tasks btn black" onClick={clearTasksHandler}>Clear Tasks</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
