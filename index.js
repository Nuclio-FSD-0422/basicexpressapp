const express = require('express');
const { fstat } = require('fs');
const app = express()
const port = 3000;

const fs = require('fs');
const path = require('path');



app.use(express.static('public2'))
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('Hola, alguien esta accediendo a esta ruta')
    res.send('Hello World!')
})

// app.get('/daniel', (req, res) => {
//     console.log('Hola, alguien accede a la ruta daniel')
//     res.json({ name: 'daniel' })
// })

// app.get('/color', (req, res) => {
//     console.log('Hola, alguien accede a la ruta que devuelve un html')
//     console.log('dirname', __dirname)
//     res.sendFile(path.join(__dirname, '/index.html'));
// })


// app.get('/cat/:catnumber', (req, res) => {
//     const catNumber = req.params.catnumber;
//     const fileRoute = path.join(__dirname, `/cat${catNumber}.jpeg`);
//     return fs.existsSync(fileRoute) ? res.sendFile(fileRoute) : res.send('Hola no existe ese gato')
// })

// app.get('/cat', (req, res) => {
//     console.log('req query params son', req.query)
//     const catNumber = req.query.numerodegato;
//     const fileRoute = path.join(__dirname, `/cat${catNumber}.jpeg`);
//     return fs.existsSync(fileRoute) ? res.sendFile(fileRoute) : res.send('Hola no existe ese gato')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})