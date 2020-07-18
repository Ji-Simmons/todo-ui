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
        terms: [],
        termsList: [],
        editForm: '',
      }
    }
    getTerms = () =>
    {
      fetch('http://localhost:5555/api/terms')
      .then((response) =>
      {
        return response.json()
      })
      .then((data) =>
      {
        console.log('data from api: ', data);
        this.setState({
          terms: data,
          termsList: data.map((item) =>
          {
            return <li 
                      key={item._id}
                      id={item._id}
                      onClick={this.updateTerms}
                      >{item.term || "Unknown"}</li>
          }),
          editForm: ''
        })
      })
      .catch();
    }
    updateTerms = (event) =>
    {
      // this is the id of the item i want to update
      //console.log('all termss: ', this.state.termss);
      const id = event.target.getAttribute('id');
      const stupidFind = (id) =>
      {
        for (let i = 0; i < this.state.terms.length; i++)
        {
          let terms = this.state.terms[i];
          if (terms._id === id)
          {
            return terms;
          }
        }
        return null;
      }
      let thisTerms = stupidFind(id);
      //thisTerms = thisTerms[0];
      //console.log('thisTerms: ', thisTerms);
      //console.log('id: ', id);
      this.setState({
        editForm: ''
      }, function()
      {
        this.setState({
          editForm: <MyForm {...thisTerms} getTerms={this.getTerms} />
        })
      });
  
      return;
    }
    componentDidMount()
    {
      this.getTerms();
    }
    render()
    {
      return (
        
        <div className="App">
          <Header />
         <Navigation />
         
          <h2>Click a term below to edit.</h2>
          <ul>
          {this.state.termsList}
          </ul>
          {this.state.editForm}
          
        </div>
      )
    }
  }