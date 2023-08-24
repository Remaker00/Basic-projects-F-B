const { User } = require('../util/dataB');

exports.insertUser = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.create({name, email, password});
        res.status(201).json(user);
    } catch {
        res.status(500).send("Error in connecting to server");
    };
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error fetching users.');
    }
};
