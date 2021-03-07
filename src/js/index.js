import Item from './model/Item';
import List from './model/List';
import {elements} from './view/base';
import * as itemView from './view/itemView';
import * as listView from './view/listView';


const Base64 = require('js-base64');
const axios =  require('axios');

const state = {
    list: {}
  };

window.onload = e => {
    
    state.list.items = JSON.parse(localStorage.getItem('items'));
    state.list.items.forEach((e,i) => {
      e.checkout_id = i;
    })

    listView.updateListNum(state.list.items);
    
  }

const itemControl = (isPreLoad) => {
    let size;
    if (itemView.getSize(elements.sizeInput)) {
        size = parseInt(itemView.getSize(elements.sizeInput).dataset.size);
    } else {
        size = -1;
    }
    
    let price;
    if (size === 0) {
        price = 6;
    }
    
    if (size === 1) {
        price = 11;
    }
    
    if (size === 2) {
        price = 14;
    }
    
    if (size === 3) {
        price = 18;
    }
    
    
    const addOns = {
        fruits: itemView.getAddOn(elements.fruitsAddOn),
        toppings: itemView.getAddOn(elements.toppingAddOn),
        drizzle: itemView.getAddOn(elements.drizzleAddOn),
        powder: itemView.getAddOn(elements.powderAddOn) 
    }
    
    const instr = elements.itemInstructions.value;
    
    const quantity = 1;
    
    if (size !== -1) {
        const acai = new Item(size, addOns, instr, price, quantity);
        
        itemView.clearAllInputs(elements.allInput);
        
        state.acai = acai;
        
    } else {
        if (!isPreLoad) alert('Please select a size');
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

elements.addToCartBtn.addEventListener('click', () => {
    itemControl(false);
    listControl();
    console.log(state);
    // back to top of the page TODO
});

const loadReviewOrderPage = (e) => {
    
    e.preventDefault();
    //take json obj and convert it to string
    if (state.list == undefined) {
        alert('Please, add at least one acai to proceed')
        return
    }
    itemControl(true);
    listControl();
    let str = JSON.stringify(state.list.items);
    //take the string and encode it in Base64

    localStorage.setItem('items', str);
    console.log(localStorage);
    str = Base64.encode(str);
    //append it to the URL andmake the get call
    
    const param = `items=${str}`;
    
    const url = `http://127.0.0.1:3000/acai/reviewOrder?${param}`;
    window.location.href = url;
}
elements.checkoutBtn.addEventListener('click', loadReviewOrderPage);
