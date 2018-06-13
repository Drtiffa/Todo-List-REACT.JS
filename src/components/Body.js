import React, { Component } from "react"
import './Body.css'

class Body extends Component {
  render() {
    const renderTasks = this.props.list.map(tsk =>
      <li className={`barrer-${tsk.done}`} key={tsk.id}>
        {tsk.task}
        <button className="done" onClick={this.props.taskDone} value={tsk.id}>{tsk.done === true ? 'Undone' : 'Done'}</button>
        <button className="delete" onClick={this.props.deleteTask} value={tsk.id}>Delete</button>
      </li>)
    return (
      <div>
        <ul className="liste">
          {renderTasks}
        </ul>
      </div>
    )
  }
}

export default Body;