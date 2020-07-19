import React, {Component as RC} from 'react';
import Page from '../components/Page';
import axios from 'axios';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';


export default class Input extends RC {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {

    }

    handleSubmit(e){
        e.preventDefault();
        const task = document.getElementById('task').value;
        const date = document.getElementById('date').value;
        
        
        axios({
        method: "POST", 
        url:"http://localhost:5555/api/tasks", 
        data: {
        task: task,
        date: date,
        
         
        
        
        }
        }).then((response)=>{
        if (response.data.msg === 'success') {
        alert("Post posted!"); 
        this.resetForm()
        } else if (response.data.msg === 'fail') {
        alert("Fix your shit.")
        }
        }).then(e.target.reset());
        }
        
        
        
    render()
    {
        return(
            <div> 
            <Header />
            <Navigation />
                    
            <Page>
                
                <form id="tasks" onSubmit={this.handleSubmit.bind(this)} method="POST">
                
           
               
        
        <textarea id="task" rows="1" cols="100" placeholder="Name of person task is assigned to:" required></textarea><br />
        <textarea id="date" rows="1" cols="100" placeholder="date it must be done by" ></textarea><br />
        <textarea id="date" rows="1" cols="100" placeholder="date it must be done by" ></textarea><br />
        <textarea id="date" rows="1" cols="100" placeholder="date it must be done by" ></textarea><br />
        <textarea id="date" rows="1" cols="100" placeholder="date it must be done by" ></textarea><br />
        <textarea id="date" rows="1" cols="100" placeholder="date it must be done by" ></textarea><br />
        
                
                <p>
                    <button type="submit" value="Create" >Delegate it!</button></p>
                    </form>
            </Page>
            </div>
        )
    }
}

/* whenever a form field changes, look up the name property
    // in state and change that value to match form field value
    changeHandler = (event) =>
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        // this is only necessary if you are displaying feedback to the user
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        
        this.setState(stateObj);
    } */