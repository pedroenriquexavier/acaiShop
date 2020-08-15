export default class Item {
    constructor (size, AddOns, instr) {
        this.size = size;
        this.addOns = {
            fruits: AddOns.fruits,
            toppings: AddOns.toppings,
            drizzle: AddOns.drizzle,
            powder: AddOns.powder
        };
        this.instructions = instr;
    }
}
