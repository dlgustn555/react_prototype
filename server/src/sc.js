const server = require('http').createServer()
const io = require('socket.io')(server)

const clients = []

io.on('connection', (client) => {
    clients.push(client)
    console.log(clients.length)
    client.on('message', (message) => {
        // handle message...
        clients.forEach((other) => other.emit('message', message))
    })

    client.on('disconnect', () => {
        console.log('client disconnect...', client.id)
        // handle disconnect..
        clients.filter((c) => c.id !== client.id)
    })

    client.on('error', (err) => {
        console.log('received error from client:', client.id)
        // handle error..
    })
})

server.listen(4400, (err) => {
    if (err) throw err
    console.log('listening on port 4400')
})
