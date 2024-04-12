const Mess = require('../Model/mess');
const Menu = require('../Model/menu');

module.exports.getAllMess = async (req, res) => {
    try {
        const mess = await Mess.find();
        res.status(200).json(mess);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.addMess = async (req, res) => {
    console.log(req.body);
    const mess = new Mess({
        messName: req.body.messName,
    });
    try {
        const savedMess = await mess.save();
        res.status(201).json(savedMess);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports.deleteMess = async (req, res) => {
    try {
        const removedMess = await Mess.deleteOne({ _id: req.params.id });
        const menus = await Menu.find();
        for (let i = 0; i < menus.length; i++) {
            const menu = menus[i];
            if (menu.mess == req.params.id) {
                await Menu.deleteOne({ _id: menu._id });
            }
        }
        res.status(200).json(removedMess);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}


