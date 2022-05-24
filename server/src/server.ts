/* Init required variables */
import express from 'express'
import bodyParser from 'body-parser'
import { routerProduct, routerCart } from './routes/api'
import routerFakeProducts from './routes/products-test'
import cors from 'cors'
import { chat } from './routes/chat'


const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routerProduct)
app.use(routerCart)
app.use(routerFakeProducts)
app.use(chat)
app.use(bodyParser.json())

/* Server listener */
const PORT: string | number = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`Contectando al puerto: ${PORT}`)
})
