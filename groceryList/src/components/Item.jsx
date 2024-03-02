import React from 'react';

const Item = ({itemData, setItems}) => {
    const {id, recipe, item, quantity, unit} = itemData;

    const deleteHandler = (e => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    })

    return (
        <div className='item'>
        <p>{item} - {quantity} {quantity > 1 ?  unit + 's' : unit }</p>
        <button onClick={deleteHandler}>X</button>
        </div>
    );
};

export default Item;