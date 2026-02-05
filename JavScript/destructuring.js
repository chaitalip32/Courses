
let pricew=666
let product={
    company:'Mango',
    itemName:'Cotton striped shirt',
    price:pricew,
    displaPrice: function(){
        return `${this.pricew.toFixed(2)}`
    }
}

let {company, itemName, price ,displaPrice}=product;

console.log(company,itemName,price,displaPrice)