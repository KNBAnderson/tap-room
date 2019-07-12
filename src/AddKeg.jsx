import React from 'react';
import { Link } from 'react-router-dom';


function AddKeg(props){
  let _name = null;
  let _type = null;
  let _ABV = null;
  let _price = null;
  let _description = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    console.log(_name.value);
    props.onAddingNewKeg({name: _name.value, type: _type.value, ABV: _ABV.value, price: _price.value, description: _description.value})
    _name = '';
    _type = '';
    _ABV = '';
    _price = '';
    _description = '';
  }

  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer name'
          ref={(input) => {_name = input;}}/><br/><br/>
          
        <input
          type='text'
          id='type'
          placeholder='Beer type'
          ref={(input) => {_type = input;}}/><br/><br/>
          
        <input
          type='number'
          id='ABV'
          placeholder='ABV'
          ref={(input) => {_ABV = input;}}/><br/><br/>
          
        <input
          type='number'
          id='price'
          placeholder='Beer price'
          ref={(input) => {_price = input;}}/><br/><br/>
          
        <textarea
          id='description'
          placeholder='Beer description.'
          ref={(textarea) => {_description = textarea;}}/><br/><br/>
          
        <Link to="/kegs"><button type='submit'>Add new beer</button></Link>
      </form>
    </div>
  );
}

export default AddKeg;