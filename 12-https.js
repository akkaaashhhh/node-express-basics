const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('this is the homepage')
    }
    else if(req.url==='/about'){
        res.end('this is the about page')
    }
    else
        res.end(`
            <h1>404 page not found</h1>
            <a href = "/">go back gome</a>
        `)
// res.write('welcome to our homepage')
// res.end()
})

server.listen(5000)