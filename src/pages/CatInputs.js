
import PropTypes from 'prop-types';
import React from "react"
const CatInputs = (props) => {
  return (
    props.cats.map((val, idx)=> {
      let catId = `cat-${idx}`, ageId = `age-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
          <input
            type="text"
            name={catId}
            data-id={idx}
            id={catId}
            value={props.cats[idx].name} 
            className="name"
          />
          <label htmlFor={ageId}>Age</label>
          <input
            type="text"
            name={ageId}
            data-id={idx}
            id={ageId}
            value={props.cats[idx].age} 
            className="age"
          />
        </div>
      )
    })
  )
}
export default CatInputs


/* Form.js

import React, { useState } from 'react';
import CatInputs from './CatInputs';

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

    return (
        <form>
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
    );
};

export default Form; */