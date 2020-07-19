import React, { Component as RC } from 'react';

import axios from 'axios';
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Catalog extends RC {
    constructor(props) {
        super(props);
    this.state = {
        tasks: [],
        task: props.task,
        date: props.date,
        
        isLoading: true,
        errors: null
    };
    console.log('props: ', props);
    }
    submitHandler = (event) =>
        {
          let id = this.props._id;
          event.preventDefault();
          const fetchOptions = {
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            body: JSON.stringify(this.state),
          }
          fetch(`http://localhost:5555/api/tasks/${id}`, fetchOptions)
          .then((response) =>
          {
            return response.json()
          })
          .then((data) =>
          {
            this.props.getTasks();
          })
          .catch();
        }
        changeHandler = (event) =>
        {
          const key = event.target.getAttribute('name');
          const update = {};
          update[key] = event.target.value;
          this.setState(update);
        }
        render()
       {
            return ( 
               <div>
                   
            
            <form onSubmit={this.submitHandler}>
                <label>Task:</label>
              <input
                default value={this.state.task}
                onChange={this.changeHandler}
                name="task"
                />
                <br />
                <label>Date:</label>
                <input
                default value={this.state.date}
                onChange={this.changeHandler}
                name="date"
                />
                <br />
                
              <input type='submit' value="Submit" />
            </form>
                        <Footer />
                        </div>    
                        
                
                
             );
        }}