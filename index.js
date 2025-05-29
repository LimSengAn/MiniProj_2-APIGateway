const express = require ('express');
const app = express()

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

app.use('/student', (req, res) => {
    console.log('INSIDE API GATEWAY STUDENT ROUTE');
    proxy.web(req, res, { target: 'http://localhost:5000' });
})

app.use('/teacher', (req, res) => {
    console.log('INSIDE API GATEWAY TEACHER ROUTE');
    proxy.web(req, res, { target: 'http://localhost:5001' });
})

app.listen(4000, () => {
    console.log('API Gateway is running on port 4000');
})
