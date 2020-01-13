export class CartProduct {
    name: string;
    description: string;
    unitPrice: number;
    quantity: number;

    constructor(name:string, description:string, unitPrice:number, quantity: number){
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }
}
