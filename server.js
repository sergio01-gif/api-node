const express = require('express')

const app = express()
let port = 3000
app.listen(port,() => {
    console.log('Servidor rodando na porta ${porte}')
})



app.get('/',(req,res) => {

res.send("Minha primeira rota")




})


app.get('/teste',(req,res) => {

    res.send("Meu primeiro teste")


})


app.get('/teste/2',(req,res) => {

    res.send("Meu segundo teste")


})