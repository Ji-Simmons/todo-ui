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
        terms: [],
        term: props.term,
        definition: props.definition,
        link: props.link,
        title: props.title,
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
          fetch(`http://localhost:5555/api/terms/${id}`, fetchOptions)
          .then((response) =>
          {
            return response.json()
          })
          .then((data) =>
          {
            this.props.getTerms();
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
                    <Header />
          
            
            <form onSubmit={this.submitHandler}>
              <input
                default value={this.state.term}
                onChange={this.changeHandler}
                name="term"
                />
              <input type='submit' value="I'm Done" />
            </form>
                        <Footer />
                        </div>    
                        
                
                
             );
        }}