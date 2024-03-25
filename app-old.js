// todo: Creando un servidor sin express

const http = require('http');

http.createServer( (req,res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachmen; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})

    // res.write('id, nombre\n')
    // res.write('1, Edgar\n')
    // res.write('2, Maria\n')
    // res.write('3, Jose\n')
    // res.write('4, pedro\n')

    res.write('Hola Mundo')
    res.end()
}).listen(3000)

console.log(`Escuchando en el puerto ${3000}`);