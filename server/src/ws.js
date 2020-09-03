const WebSocektServer = require('ws').Server

const wss = new WebSocektServer({ port: 4300 })

wss.on('connection', function (ws) {
    ws.on('message', function (strData) {
        const { event } = JSON.parse(strData)

        switch (event) {
            case 'open':
                ws.send(JSON.stringify({ message: 'WelCome!!' }))
                break
            case 'request':
                ws.send(strData)
                break
        }
    })
})
