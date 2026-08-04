import { createServer } from 'node:http'

//define a porta
const port = 3333

const server = createServer((request, response) => {
    response.write('oi')

    return response.end()
})

server.listen(port);    