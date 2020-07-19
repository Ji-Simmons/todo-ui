/*import React from "react"
class Form extends React.Component { */

  import React, { Component as RC } from 'react';
// import CatInputs from "./CatInputs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MyForm from "./MyForm";
import '../App.scss';
import axios from 'axios';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Form extends RC {
  state = {
    cats: [{name:"", age:""}],
    person: "",
    date: ""
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
  // testing below
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
    // testing above in lieu of below...
/*handleSubmit = (e) => { e.preventDefault() }
render() {
    let {person, date, cats} = this.state*/
    render()
    {
      let {person, date, cats} = this.state
    return (
      <div>
        <Header />
        <Navigation />
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} method="POST" >
        <label htmlFor="name">Person</label> 
        <input type="text" name="person" id="person" value={person} />
        <label htmlFor="date">Date</label> 
        <input type="text" name="date" id="date" value={date} />
        <button onClick={this.addCat}>Add new cat</button>
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
                  value={cats[idx].name} 
                  className="name"
                />
                <label htmlFor={ageId}>Age</label>
                <input
                  type="text"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  value={cats[idx].age} 
                  className="age"
                />
              </div>
            )
          })
        }
        <input type="submit" value="Submit" /> 
      </form>
      <Footer />
      </div>
    )
  } /*this one starts at render*/
}
export default Form