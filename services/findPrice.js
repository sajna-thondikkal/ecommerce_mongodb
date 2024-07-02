// const offerPrice = require('./offerPrice');
// const offerPrice = require('./products');
function findPrice(price,quantity){
    const offerprice = offerPrice(price);
    const total = offerprice * quantity;
    return total;
}

module.exports = findPrice;