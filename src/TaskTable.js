import * as React from 'react';
import Task from './Task';
import { useContext, useEffect } from 'react';
import { TaskContext } from './App.js';

export default function TaskTable() {
  /*To reset the buttons everytime the table is loaded */
  useEffect(() => {
    setCancelClicked(false);
  });
  const {
    taskData,
    setTaskData,
    indexClicked,
    setIndexClicked,
    setEditTable,
    setCancelClicked,
    taskToSave
  } = useContext(TaskContext);
  function handleSaveButton(){
    setTaskData([
      ...taskData,taskToSave
    ]);
  }
  return (
    <div className="TaskTable">
      <button
        name="SaveButtonTable"
        onClick={() => {
          setIndexClicked(-1);
          setEditTable(false);
          handleSaveButton();
        }}
      >
        Save
      </button>
      <button
        name="CancelButtonTable"
        onClick={() => {
          setIndexClicked(-1);
          setEditTable(false);
          setCancelClicked(true);
        }}
      >
        Cancel
      </button>
      <button
        name="EditButtonTable"
        onClick={() => {
          indexClicked !== -1 ? setEditTable(true) : setEditTable(false);
        }}
      >
        Edit
      </button>
      <button name="DeleteButtonTable">Delete</button>
      <table>
        <thead>
          <tr>
            <th style={{ width: '10℅' }}>ID</th>
            <th>Description</th>
            <th style={{ width: '20%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => {
            return <Task key={index} {...task}/>;
          })}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}
