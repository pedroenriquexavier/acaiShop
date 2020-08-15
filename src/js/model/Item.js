export default class Item {
    constructor (obj) {
        this.size = obj.size;
        this.addOns = {
            fruits: obj.AddOns.fruits,
            toppings: obj.AddOns.fruits,
            drizzle: obj.AddOns.fruits,
            powder: obj.AddOns.fruits
        };
        this. instructions = obj.instructions;
    }

    getSize (size) {}
}