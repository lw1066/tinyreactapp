import React from 'react';
import { useState } from 'react';
import '../App.css';





const AddItems = ({setItems}) => {
    const [newValues, setNewValues] = useState({item:'', recipe:'', quantity:'', unit:''});

const submitHandler = (e) => {
    e.preventDefault()
    setItems((currItems) => {
        const newItem = {...newValues, id: new Date().getTime()}
        return [...currItems, newItem];
    })
    setNewValues({ item: '', recipe: '', quantity: '', unit: '' }); 
};

const onChangeHandler = (e) => {
    const {id, value} = e.target;
    setNewValues((currValues) => (
        {...currValues, [id]: value}
    ))
}

    return (
        <form id='addItemForm' onSubmit= {submitHandler}>
            <label className='label'  htmlFor="item" >Item</label>
            <input className='formInput' value={ newValues.item } type="text" id='item' onChange={onChangeHandler} required/>
            <label className='label'  htmlFor="recipe" >Recipe (if any)</label>
            <input className='formInput' value={ newValues.recipe } type="text" id='recipe' onChange={onChangeHandler} />
            <label className='label'  htmlFor="quantity" >How many?</label>
            <input className='formInput' value={ newValues.quantity } type="number" id='quantity' onChange={onChangeHandler} min="1" required/>
            <label className='label'  htmlFor="unit" ></label>
            <select value={ newValues.unit } id='unit' onChange={onChangeHandler} required>
            <option value="">Select...</option>
                <option value="teaspoon">Teaspoon</option>
                <option value="tablespoon">Tablespoon</option>
                <option value="cup">Cup</option>
                <option value="ounce">Ounce</option>
                <option value="gram">Gram</option>
                <option value="piece">piece</option>
            </select>

            <button id='submit'>Add</button>
        </form>
    );
};

export default AddItems;