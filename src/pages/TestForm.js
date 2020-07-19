import React, { Component as RC } from 'react';
// import CatInputs from "./CatInputs";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MyForm from "./MyForm";
import '../App.scss';
import axios from 'axios';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Form extends RC {
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
    }

        handleSubmit(e) { 
          e.preventDefault(); 
     
        let {cats, task, owner, description, date} = this.state
        
        /*const owner = document.getElementById('owner').value;
        const description = document.getElementById('description').value;
        const cats = document.getElementById('cats').value;
        const task = document.getElementById('task').value;
        const date = document.getElementById('date').value;*/
        
        
        axios({
        method: "POST", 
        url:"http://localhost:5555/api/tasks", 
        data: {
        task: task,
        date: date,
        owner: owner,
        description: description,
        cats: cats,
        
         
        
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
        
        
      // original code below   
    state = {
        cats: [{name:"", age:""}],
        owner: "",
        description: ""
      }
     handleChange = (e) => {
        if (["name", "age"].includes(e.target.className) ) {
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ cats }, () => console.log(this.state.cats))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
      } 
      
    addCat = (e) => {
        this.setState((prevState) => ({
          cats: [...prevState.cats, {name:"", age:""}],
        }));
      }
      
      render() {
        
let {owner, description, cats} = this.state
    
        return (
            <div>
            <Header />
            <Navigation />
            
          <form id="tasks" onSubmit={this.handleSubmit} onChange={this.handleChange} method="POST" >
            <label htmlFor="name">Owner</label> 
            <textarea id="owner" rows="1" cols="100" placeholder="owner" required></textarea><br />
            <textarea id="description" rows="1" cols="100" placeholder="description" required></textarea><br />
            
            
           

            <button id="myBtn">Add new cat</button>
            {
              cats.map((val, idx)=> {
                let catId = `cat-${idx}`, ageId = `age-${idx}`
                return (
                  <div key={idx}>
                    <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                    <input
                      type="text"
                      name={catId}
                      data-id={idx}
                      id={catId}
                      defaultValue={cats[idx].name} 
                      className="name"
                    />
                    <label htmlFor={ageId}>Age</label>
                    <input
                      type="text"
                      name={ageId}
                      data-id={idx}
                      id={ageId}
                      defaultValue={cats[idx].age} 
                      className="age"
                    />
                  </div>
                )
              })
            }
            <button type="submit" value="Create" > Delegate</button>
          </form>
          <Footer />
          </div>
        )
      }
    }
    export default Form