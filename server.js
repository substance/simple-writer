import express from 'express'
import path from 'path'

const PORT = 7777
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(PORT)

console.info('Listening at port: ', PORT)