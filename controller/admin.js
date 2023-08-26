const {Expense} = require('../dataB');
const {signup} = require('../dataB')
const bcrypt = require('bcrypt');

exports.insertExp = async (req, res) => {
    const { expense, description, category} = req.body;
    try{
        await Expense.create({ expense, description, category });
        res.status(201).send('User inserted successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error inserting user.');
    }
};

exports.getAllExp = async (req, res) => {
    try {
        const users = await Expense.findAll();
        console.log(users);
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users.');
    }
};

exports.deleteExp = async (req, res) => {
    const expenseId = req.params.id; // Change "userId" to "expenseId" for clarity
    try {
        const expense = await Expense.findByPk(expenseId);
        if (!expense) {
            res.status(404).send('Expense not found.');
            return;
        }

        await expense.destroy();
        res.status(200).send('Expense deleted successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting expense.');
    }
};

exports.insertusers = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const hashpass = await bcrypt.hash(password, 10);
        await signup.create({ name, email, password: hashpass });
        res.status(201).send('User LoggedIn successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Logging user.');
    }
};

exports.checkusers = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await signup.findOne({where: { email } });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                res.status(200).send('User LoggedIn successfully.');
            } else {
                res.status(401).send('Invalid credentials.');
            }
        } else {
            res.status(401).send('Invalid credentials.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Logging user.');
    }
};