const productServices = require('./products');

function item_price(price,quantity){
    const offerPrice = productServices.findOfferPrice(price);
    const total = offerPrice * quantity;
    return total;
}

function grandTotal(totalObj){
    sum=0;
    for(const item of totalObj){
        sum = sum + item.item_price;
    }
    return sum;
}

module.exports = {
    item_price,
    grandTotal
}