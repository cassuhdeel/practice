const todoService = require("./todo.service");

async function list(req, res) {
    const data = await todoService.list();
    res.json({ data });
}

async function read(req, res) {
    const { todo: data } = res.locals;
    res.json({ data })
}

async function create(req, res) {
    const data = await todoService.create(req.body.data);
    res.status(201).json({ data })
}

module.exports = {
    list,
    read,
    create,
}