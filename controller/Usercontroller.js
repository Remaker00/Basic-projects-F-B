const { User } = require('../util/dataB');

exports.insertUser = async(req, res) => {
    const {name, email, passsword} = req.body;
    try {
        const user = await User.create({name, email, passsword});
        res.status(201).json(user);
    } catch {
        res.status(500).send("Error in connecting to server");
    };
};