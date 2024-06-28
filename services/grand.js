const productRepository = require('../repositories/products');
const findPrice = require('../services/findPrice');



async function grand(totalObj){
    const sum = 0
    for(const item of totalObj){
        const it_id = item.item_name;
        const prodPrice = await productRepository.getProductById(itemId);
        const find_price = findPrice(prodPrice.price,item.item_quantity);
        item.item_price = find_price;
        const grand_total = sum + find_price;

    }
}

module.exports = grand;