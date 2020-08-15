import Item from './model/Item';
import List from './model/List';
import {elements} from './view/base';
import * as itemView from './view/itemView';
import * as listView from './view/listView';

const state = {};

const itemControl = () => {
    let size;
    if (itemView.getSize(elements.sizeInput)) {
        size = itemView.getSize(elements.sizeInput).dataset.size;
    } else {
        size = -1;
    }
    
    const addOns = {
        fruits: itemView.getAddOn(elements.fruitsAddOn),
        toppings: itemView.getAddOn(elements.toppingAddOn),
        drizzle: itemView.getAddOn(elements.drizzleAddOn),
        powder: itemView.getAddOn(elements.powderAddOn) 
    }
    
    const instr = elements.itemInstructions.value;
    
    if (size !== -1) {
        const acai = new Item(size, addOns, instr);
        
        itemView.clearAllInputs(elements.allInput);
        
        state.acai = acai;
        
    } else {
        alert('Please select a size');
        state.acai = null;
    }
    
}

const listControl = () => {
    if (!state.list) state.list = new List();
    
    if (state.acai !== null) {
        // add item to list
        state.list.items.push(state.acai);
        // update num (just number)
        listView.updateListNum(state.list.items);
    }
    
};

elements.cartBtn.addEventListener('click', () => {
    itemControl();
    listControl();
    console.log(state.list);
    // back to top of the page TODO
});

