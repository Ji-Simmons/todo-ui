import React, { Component as RC } from 'react';

import axios from 'axios';
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Catalog extends RC {
    state = {
        tasks: [],
        isLoading: true,
        errors: null
    };
    gettasks() {
        axios
       // This is where the data is hosted When local
            .get('http://localhost:5555/api/tasks')
            // when it's live:
            // .get('https://task-catalog-api.herokuapp.com/') 
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            console.log(response);
          this.setState({
            tasks: response.data,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.gettasks();
    }
    render() {
        const { isLoading, tasks } = this.state;
            return ( 
                <React.Fragment> 
                    <Header />
            <Navigation />
            
                    <div className="App">       
                        {!isLoading ? (
                            tasks.map(tasks => {
                                const { _id, task, date } = tasks;
                                return (
                                    <div className="background" key={_id}>
                                        
                                        <div className="task"> {task}:</div>
                                        <div className="date"> {date}</div><br />
                                        
                                        
                                        <hr />
                                     
                                        
                                    </div>
                                );
                            })
                        ) : (
                            <p>Chill, bro . . .  I got this.</p>
                        )}
                        <Footer />
                    
                        </div>
                </React.Fragment>
                
             );
        }}
        