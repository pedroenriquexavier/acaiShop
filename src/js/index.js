import Item from './model/Item';
import {elements} from './view/base';
import * as itemView from './view/itemView';

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
        
        console.log(acai);

        itemView.clearAllInputs(elements.allInput);
    } else {
        alert('Please select a size');
    }
    
    
    
    
}

elements.cartBtn.addEventListener('click', () => {
    itemControl();
});

