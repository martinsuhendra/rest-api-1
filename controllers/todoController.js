const { Todo } = require('../models')

class TodoController {
    static showAll(req, res) {
        console.log(req.authenticatedUser);
        
        Todo
            .findAll({
                where : {
                    UserId : req.authenticatedUser.id
                }
            })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static showOne(req, res) {
        
        Todo
            .findByPk(req.params.id)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static createTodo(req, res) {
        let {title, description} = req.body
      Todo
        .create({
            title, description, UserId : req.authenticatedUser.id
        })
        .then((data)=> {
            res.status(201).json({data, msg: 'new todo created'})
        })
        .catch((err)=> {
            res.status(500).json(err)
        })
    }
    static delete(req, res) {
        
        Todo
            .destroy({
                where : {
                    id : req.params.id
                }
            })
            .then(() => {
                res.status(200).json({msg:'todo deleted'})
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static update(req, res) {
        let { title, description } = req.body
    
        Todo
            .update(
                {
                    title, description
                },
                {
                    where : {id : req.params.id}
                }
            )
            .then(() => {
                res.status(200).json({ msg : 'update success'})
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static updateOne(req, res) {
        let { title, description } = req.body
    
        Todo
            .update(
                {
                    title, description
                },
                {
                    where : {id : req.params.id}
                }
            )
            .then(() => {
                res.status(200).json({ msg : 'update success'})
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = TodoController