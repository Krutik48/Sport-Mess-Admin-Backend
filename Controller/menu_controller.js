const Menu = require('../Model/menu');

module.exports.getAllMenu = async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.addMenu = async (req, res) => {
    
    const menu = new Menu({
        day: req.body.day,
        time: req.body.time,
        week: req.body.week,
        items: req.body.items,
        mess: req.body.mess
    });
    try {
        const savedMenu = await menu.save();
        res.status(201).json(savedMenu);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.deleteMenu = async (req, res) => {
    try {
        const removedMenu = await Menu.delete
        One
        ({ _id: req.body.id });
        res.status(200).json(removedMenu);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.updateMenu = async (req, res) => {
    try {
        // only the items that are to be updated are passed in the body of the request
        const updatedMenu = await Menu.updateOne
        (
            { _id: req.params.id },
            { $set: req.body }
        );

        res.status(200).json(updatedMenu);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}