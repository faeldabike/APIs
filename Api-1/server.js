const express = require('express');
const data = require('./data.json');

const app = express();

let clients = []

// HTTP
// GET : receber dados de um resource
// POST : enviar dado ou informação para serem processados por um resource
// PUT : atualizar dados de um resource
// DELETE : deletar um resources


app.use(express.json());

app.get("/clients",(req,res) => {
    res.status(200).json(data)
})


app.get("/clients/:id",(req,res) => {
    const { id } = req.params
    const client = data.find(cli => cli.id == id);
    if(!client) return res.status(204).json();
    res.json(client)
})


app.post("/clients",(req,res) => {
    const { name, idade } = req.body
    const body = req.body
    if(name !== undefined){
        if(clients.find(x=>x.name == name)){
            res.status(204).json()
        }else{
            clients.push(body)
            console.log(clients)
            res.json({ name,idade })
        }
    }else{
        res.status(204).json()
    }

})

app.put("/clients/:id",(req,res) => {
    const { id } = req.params
    const client = clients.find(cli => cli.id == id);
    if(!client) return res.status(204).json();
    const { name } = req.body
    client.name = name
    console.log(clients)
    res.json(client)
    
})

app.delete("/clients/:id",(req,res) => {
    const { id } = req.params
    clients = clients.filter(client => client.id != id);
    console.log(clients)
    res.json(clients)
})


app.listen(3000, () =>{
    console.log("server is running")
})