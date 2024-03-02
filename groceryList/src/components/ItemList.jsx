import React from 'react';
import AddItems from './AddItems';
import Item from './Item';
import { useState } from 'react';


const ItemList = () => {
    const [itemList, setItems] = useState([]);
    return (
        <div id='items'>
            <AddItems setItems={setItems} />
            <div id='itemList'>
                <h2>Items</h2>
                {itemList.map((item) => (
                    <Item key={item.id} itemData={item} setItems={setItems}/>
                ))}
            </div>
        </div>
    );
    
};

export default ItemList;