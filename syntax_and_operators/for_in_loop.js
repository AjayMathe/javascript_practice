/* "for in" iterates over an object properties and methods */

let product = {
    product_name:'hipstar',
    product_category:'footware',
    product_price: 1500,
    product_standard_price: 1200

    ,netProfit:function(){
        return this.product_price - this.product_standard_price;
    }
};

for(key in product){
    console.log(`${key}=${product[key]}`);
}
console.log(product.netProfit())
