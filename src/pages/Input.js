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
        const term = document.getElementById('term').value;
        const definition = document.getElementById('definition').value;
        const link = document.getElementById('link').value;
        const title = document.getElementById('title').value;
        
        axios({
        method: "POST", // https://github.com/Ji-Simmons/term-catalog-api/tree/master/api/terms
        url:"https://github.com/Ji-Simmons/term-catalog-api/tree/master/api/terms", 
        data: {
        term: term,
        definition: definition,
        link: link,
        title: title,
         
        
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
                
                <form id="terms" onSubmit={this.handleSubmit.bind(this)} method="POST">
                
           
               
        
        <textarea id="term" rows="1" cols="100" placeholder="term to be defined" required></textarea><br />
        <textarea id="definition" rows="1" cols="100" placeholder="definition of term" required></textarea><br />
        <textarea id="link" rows="1" cols="100" placeholder="link to resource"></textarea><br />
        <textarea id="title" rows="1" cols="100" placeholder="name the link"></textarea><br />
                
                <p>
                    <button type="submit" value="Create" >Send it!</button></p>
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