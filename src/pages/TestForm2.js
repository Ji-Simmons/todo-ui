/*import React from "react"
class Form extends React.Component { */

  import React, { useState } from 'react';
// import CatInputs from "./CatInputs";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MyForm from "./MyForm";
import '../App.scss';
import axios from 'axios';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CatInputs from "./CatInputs";
// import PropTypes from 'prop-types';

const Form = () => {
  const [ownerState, setOwnerState] = useState({
      owner: '',
      description: '',
      
  });

  const handleOwnerChange = (e) => setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
  });

  const blankCat = { name: '', age: '' };
  const [catState, setCatState] = useState([
      { ...blankCat },
  ]);

  const addCat = () => {
      setCatState([...catState, { ...blankCat }]);
  };

  const handleCatChange = (e) => {
      const updatedCats = [...catState];
      updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
      setCatState(updatedCats);
  };
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const owner = document.getElementById('owner').value;
    const description = document.getElementById('description').value;
    const catId = document.getElementById('name').value;
    const ageId = document.getElementById('age').value;
  
    
    
    axios({
    method: "POST", 
    url:"http://localhost:5555/api/tasks", 
    data: {
    owner: owner,
    description: description,
    name: catId,
    age: ageId,

    
     
    
    
    }
    }).then((response)=>{
      if (response.data.msg === 'success') {
      alert("Post posted!"); 
      this.resetForm()
      } else if (response.data.msg === 'fail') {
      alert("Fix your shit.")
      }
      }).then(e.target.reset());
    
      };
    
    

  return (
    <div>
      <Header />
      <Navigation />
      <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="owner">Owner</label>
          <input
              type="text"
              name="owner"
              id="owner"
              value={ownerState.owner}
              onChange={handleOwnerChange}
          />
          <label htmlFor="description">Description</label>
          <input
              type="text"
              name="description"
              id="description"
              value={ownerState.description}
              onChange={handleOwnerChange}
          />
          <input
              type="button"
              value="Add New Cat"
              onClick={addCat}
          />
          {
              catState.map((val, idx) => (
                  <CatInputs
                      key={`cat-${idx}`}
                      idx={idx}
                      catState={catState}
                      handleCatChange={handleCatChange}
                  />
              ))
          }
          <input type="submit" value="Submit" />
      </form>
      <Footer />
      </div>
  );
};

export default Form;