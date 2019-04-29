const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {
    static register(req, res) {
        let { username, password } = req.body
        User
            .create({
                username, password
            })
            .then((data) => {
                res.status(201).json(data)
            })
            .catch((err) => {
                console.log(err, 'apa erronaya');
                
                res.status(500).json(err)
            })
    }

    static login(req, res) {
     
        User
            .findOne({
                where : {
                    username : req.body.username
                }
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json({msg: 'user not found'})
                } else if(!compare(req.body.password, user.password)) {
                    res.status(400).json({msg: 'username/password is incorrect!'})
                } else {
                    let { id, username } = user
                    const payload = { id, username }
                    const token = sign(payload)
                    req.headers.token = token
                    
                    res.status(200).json({token, payload})
                }
            })
            .catch((err) => {
                console.log(err);
                
                res.status(500).json(err)
            })
    }
}

module.exports = UserController