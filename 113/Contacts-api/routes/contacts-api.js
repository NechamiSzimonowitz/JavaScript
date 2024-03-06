var express = require('express');
var router = express.Router();
const socketIo = io();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const [results] = await global.connection.query(
                'SELECT * FROM contacts'
            );
            res.send(results);
        } catch (err) {
            return next(err);
        }
    })

socketIo.on('changeMade', async () => {
    const { first, last, email, phone } = req.body;
    try {
        const [results] = await global.connection.execute(
            'INSERT INTO contacts(first, last, email, phone) VALUES(?,?,?,?)', [first, last, email, phone]
        );

        console.log(results);
        req.body.id = results.insertId;

        res.status(201)
            .location(`/contacts-api/${req.body.id}`)
            .send(req.body);
    } catch (err) {
        return next(err);
    }
});



router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.end(err.message || 'Internal server error...');
});

router.get('/:id', async (req, res) => {
    const contactId = req.params.id;

    try {
        const [contacts] = await global.connection.execute(
            'SELECT * FROM contacts WHERE id = ?', [contactId]
        );

        if (!contacts) {
            return res.status(404).json({ error: 'contact not found' });
        }

        res.json(contacts);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'internal server errror' });
    }
})

module.exports = router;