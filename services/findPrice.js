const offerPrice = require('./offerPrice');

function findPrice(price,quantity){
    const offerprice = offerPrice(price);
    const total = offerprice * quantity;
    return total;
}

module.exports = findPrice;