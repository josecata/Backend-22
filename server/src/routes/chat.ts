import { Router } from 'express'
import { save as saveMessages, get as getMessages, save } from '../Controllers/MongoDB/messages'

interface Author {
	id: number
	firstName: string
	lastName: string
	age: number
	alias: string
	avatar: string
}

interface Message {
	author: Author
	text: string
}

export const chat: Router = Router()

chat
	.route('/chat')
	.get(async (req, res) => {
		const messages = await getMessages()
		console.log(`Mensajes encontrados: ${messages}`)
		if (messages.length > 0) {
			res.status(200).json(messages)
		} else {
			res.status(404).json({ error: 'No messages' })
		}
	})
	.post(async (req, res) => {
        console.log(req.body)
		const message: Message = req.body
		console.log(`Mensaje a subir: ${message}`)
		save(message)
		res.status(202).json({ OK: 'Mensaje subido' })
	})
