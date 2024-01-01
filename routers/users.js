const express = require('express')
const router = express.Router();

const {user, all_users, login, signup} = require ('../controllers/users')


router.get('/', user)
router.get('/all_users', all_users)
router.post('/login', login)
router.post('/signup', signup)





module.exports = router;