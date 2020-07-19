import React, { Component as RC } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyForm from "./MyForm";
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default class TryApp extends RC {
    constructor()
    {
      super();
      this.state = {
        tasks: [],
        tasksList: [],
        editForm: '',
      }
    }
    getTasks = () =>
    {
      fetch('http://localhost:5555/api/tasks')
      .then((response) =>
      {
        return response.json()
      })
      .then((data) =>
      {
        console.log('data from api: ', data);
        this.setState({
          tasks: data,
          tasksList: data.map((item) =>
          {
            return <li 
                      key={item._id}
                      id={item._id}
                      onClick={this.updateTasks}
                      >{item.task || "Unknown"}</li>
          }),
          editForm: ''
        })
      })
      .catch();
    }
    updateTasks = (event) =>
    {
      // this is the id of the item i want to update
      //console.log('all taskss: ', this.state.taskss);
      const id = event.target.getAttribute('id');
      const stupidFind = (id) =>
      {
        for (let i = 0; i < this.state.tasks.length; i++)
        {
          let tasks = this.state.tasks[i];
          if (tasks._id === id)
          {
            return tasks;
          }
        }
        return null;
      }
      let thisTasks = stupidFind(id);
      //thisTasks = thisTasks[0];
      //console.log('thisTasks: ', thisTasks);
      //console.log('id: ', id);
      this.setState({
        editForm: ''
      }, function()
      {
        this.setState({
          editForm: <MyForm {...thisTasks} getTasks={this.getTasks} />
        })
      });
  
      return;
    }
    componentDidMount()
    {
      this.getTasks();
    }
    render()
    {
      return (
        
        <div className="App">
          <Header />
         <Navigation />
         
          <h2>Click a task below to edit.</h2>
          <ul>
          {this.state.tasksList}
          </ul>
          {this.state.editForm}
          
        </div>
      )
    }
  }