import React from 'react';
import '../App.css';





const AddItems = () => {

const submitHandler = () => {
    console.log('hello from subnit')
};

    return (
        <form id='addItemForm' onSubmit= {submitHandler}>
            <label className='label' htmlFor="itemName">Item name</label>
            <input className='formInput' type="text" id='itemName' required />
            <span id='inputs'>
            <label htmlFor="quantity">Quantity</label>
            <input className='formInput' type="number" id='quantity'required />
            <label htmlFor="unit">Unit</label>
            <select className='formInput' name='unit' id='unit' required >
                <option value="grams">grams</option>
                <option value="ml">ml</option>
                <option value="Oz">Oz</option>
                <option value="pieces">pieces</option>
            </select>
            </span>
            <label className='label' htmlFor="recipe">Recipe</label>
            <input className='formInput' type="text" id='recipe'/>

            <button id='submit'>Add</button>
        </form>
    );
};

export default AddItems;