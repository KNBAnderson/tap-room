import React from 'react';


function AddKeg(props){
  let _name = null;
  let _type = null;
  let _ABV = null;
  let _price = null;
  let _description = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onAddingNewKeg({name: _name.value, type: _type.value, ABV: _ABV.value, price: _price.value, description: _description.value})
    _name.value = '';
    _type.value = '';
    _ABV.value = '';
    _price.value = '';
    _description.value = '';
  }

  return (
    <div>
      <h1>Add a beer to the list:</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer name'
          required
          ref={(input) => {_name = input;}}/><br/><br/>
          
        <input
          type='text'
          id='type'
          placeholder='Beer type'
          required
          ref={(input) => {_type = input;}}/><br/><br/>
          
        <input
          type='number'
          id='ABV'
          placeholder='ABV'
          required
          ref={(input) => {_ABV = input;}}/><br/><br/>
          
        <input
          type='number'
          id='price'
          placeholder='Beer price'
          required
          ref={(input) => {_price = input;}}/><br/><br/>
          
        <textarea
          id='description'
          placeholder='Beer description.'
          required
          ref={(textarea) => {_description = textarea;}}/><br/><br/>
          
        <button type='submit'>Add new beer</button>
      </form>
    </div>
  );
}

export default AddKeg;