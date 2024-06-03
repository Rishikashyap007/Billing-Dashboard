const Item = require('../Models/item.js');

const createitem = async (req, res) => {
    try {
        const { itemName, customerSellingPrice, itemStatus } = req.body;

        // Create a new item instance
        const newItem = new Item({
            itemName,
            customerSellingPrice,
            itemStatus,
        });

        // Save the new item to the database
        const savedItem = await newItem.save();

        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Failed to create item' });
    }
}
const getitems = async(req,res)=>{
    const items = await Item.find({})
    res.json({items})
}

module.exports = {createitem,getitems}