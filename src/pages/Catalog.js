import React, { Component as RC } from 'react';

import axios from 'axios';
import '../App.scss';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class Catalog extends RC {
    state = {
        terms: [],
        isLoading: true,
        errors: null
    };
    getterms() {
        axios
       // This is where the data is hosted When local
            .get('http://localhost:5555/api/terms')
            // when it's live:
            //.get('https://blog-api1.herokuapp.com/') 
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            console.log(response);
          this.setState({
            terms: response.data,
            isLoading: false
          });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        this.getterms();
    }
    render() {
        const { isLoading, terms } = this.state;
            return ( 
                <React.Fragment> 
                    <Header />
            <Navigation />
            
                    <div className="App">       
                        {!isLoading ? (
                            terms.map(terms => {
                                const { _id, term, definition, link, title } = terms;
                                return (
                                    <div className="background" key={_id}>
                                        
                                        <div className="term"> {term}:</div>
                                        <div className="definition"> {definition}</div><br />
                                        <div className="resource" >
                                        <a href={link} target="_blank">{title}</a>
                                        </div>
                                        <div>
                                        <button onClick={this.editItem}>Edit entry</button>
                                        </div>
                                        <hr />
                                     
                                        
                                    </div>
                                );
                            })
                        ) : (
                            <p>Chill, bro . . .</p>
                        )}
                        <Footer />
                    
                        </div>
                </React.Fragment>
                
             );
        }}
        
        




// set the db to add time stamps, and then use js to sort by stamp.