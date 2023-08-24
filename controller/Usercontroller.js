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

exports.getUser = async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({email});

        if (user) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    } catch (error) {
        console.error("Error while checking email existence:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}