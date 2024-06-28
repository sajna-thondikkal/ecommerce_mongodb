

function grandTotal(totalObj){
    sum=0;
    for(const item of totalObj){
        sum = sum + item.item_price;
    }
    return sum;
}

module.exports = grandTotal;