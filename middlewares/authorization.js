const { verify } = require('../helpers/jwt')
const { Todo } = require('../models')

module.exports = (req, res, next) => {
    const decoded = verify(req.headers.token)
    
    Todo
        .findByPk(req.params.id)
        .then((foundUser) => {
            console.log(foundUser,'found');
            
            if (foundUser.UserId === decoded.id) next()
            else res.status(401).json({ type: 'AUTHORIZATION ERROR', message: 'You do not have access to this page!' })
        })
}