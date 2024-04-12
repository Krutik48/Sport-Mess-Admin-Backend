const Items = require('../Model/items');
const Menu = require('../Model/menu');


module.exports.getAllItems = async (req, res) => {
    try {
        const items = await Items.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.addItem = async (req, res) => {
    console.log(req.body);
    const item = new Items({
        foodName : req.body.foodName,
        calories : req.body.calories,
        protein : req.body.protein,
        quantity : req.body.quantity,
        amount : req.body.amount
    });
    try {
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.deleteItem = async (req, res) => {
    try {
        const removedItem = await Items.deleteOne({ _id: req.params.id });
        const menus = await Menu.find();
        for (let i = 0; i < menus.length; i++) {
            const menu = menus[i];
            const items = menu.items;
            for (let j = 0; j < items.length; j++) {
                if (items[j] == req.params.id) {
                    items.splice(j, 1);
                    break;
                }
            }
            await Menu.updateOne({ _id: menu._id }, { $set: { items: items } });
        }
        res.status(200).json(removedItem);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Items.updateOne
            (
                { _id: req.params.id },
                { $set: req.body }
            );

        res.status(200).json(updatedItem);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
