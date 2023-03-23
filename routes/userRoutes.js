const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Homepage' 
    });
});

router.post('/add-users', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    users.push({name: name, age: age});
    console.log(users);
    res.redirect('/users');
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'View Users',
        users: users
    });
});

module.exports = router;