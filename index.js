const fs = require('fs')
const key = fs.readFileSync('./ca/hscert.com+5-key.pem')
const cert = fs.readFileSync('./ca/hscert.com+5.pem')

const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Cert Page!')
})

const https = require('https')
const server = https.createServer({ key, cert }, app)

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`)
})