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
import CatInputs from "./CatInputs";

class Form extends RC {
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
handleSubmit = (e) => { e.preventDefault();
  const owner = document.getElementById('owner').value;
  const description = document.getElementById('description').value; 

  axios({
    method: "POST", 
    url:"http://localhost:5555/api/tasks", 
    data: {
    owner: owner,
    description: description,
    

}
  })
}
render() {
    let {owner, description, cats} = this.state
    return (
      <div>
      <Header />
      <Navigation />
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCat}>Add new cat</button>
        <CatInputs cats={cats} />
        <input type="submit" value="Submit" /> 
      </form>
      <Footer />
      </div>
    )
  }
}
export default Form