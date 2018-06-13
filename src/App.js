import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"

class App extends Component {
  state = {
    list: [
      {id: 1, task: "Chaton", done: false},
      {id: 2, task: "Chien", done: false},
      {id: 3, task: "Hamster", done: false}
    ],
    input:''
  }

  deleteTask = (event) => {
    const tab_list = this.state.list;
    const index = tab_list.findIndex(x => x.id == event.currentTarget.value)
    console.log(index)
    const tab_list_two = tab_list.slice(0, index).concat(tab_list.slice(index+1))
    this.setState({list:tab_list_two})
  }

  taskDone = (event) => {
    const tab_list = this.state.list;
    const index = tab_list.findIndex(x => x.id == event.currentTarget.value)
    tab_list[index].done = !tab_list[index].done;
    this.setState({list:tab_list})
  }

  fetchInput = (event) => {
    this.setState({ input : event.currentTarget.value});
  }

  add = () => {
    this.setState({ list : [...this.state.list, { id:this.state.list.length+1,  task : this.state.input, done:false }] }, () => console.log(this.state.list))
    
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <input type="text" onChange={this.fetchInput} />
        <button onClick={this.add} value="test">Add a new one</button>
        <Body className="body" list={this.state.list} taskDone={this.taskDone} deleteTask={this.deleteTask} />
      </div>
    )

  }
}

export default App;
