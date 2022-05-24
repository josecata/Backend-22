import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Author {
	id: number
	firstName: string
	lastName: string
	age: number
	alias: string
	avatar: string
}

interface Messages {
	author: Author
	text: string
}

const Chat: React.FC = () => {
	const [systemMessage, setSystemMessage] = useState<string>()
	const [messages, setMessages] = useState<Messages[] | undefined>(undefined)

	// const getMessagess = async (e:any)=>{
	//     e.preventDefault()
	//     try{
	//         let res = await fetch('http://localhost:8080/chat',{
	//             method: 'GET',
	//             headers: {
	//                 'Content-type': 'application/json'
	//             }
	//         })
	//         let data = await res.json().then((data)=>{
	//             if(data.length != 0){
	//                 setMessages(data)
	//             }
	//         })
	//         console.log(data)
	//         if(res.status===200){

	//         }else{
	//             setSystemMessage('Empty chat')
	//         }
	//     }catch(err){
	//         console.log(err)
	//         throw new Error('Error with chat')
	//     }
	// }

	useEffect(() => {
		try {
			fetch('http://localhost:8080/chat', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.length != 0) {
						setMessages(data)
					} else {
						setSystemMessage('Empty chat')
					}
				})
		} catch (err) {
			console.log(err)
			throw new Error('Error with chat')
		}
	}, [])

	return (
		<>
			<div className='chat'>
				{messages === undefined ? (
					<p>{systemMessage}</p>
				) : (
					messages.map((msg, i) => {
						return (
							<>
								<div className='message'>
									<img src={msg.author.avatar} alt='' />
									<span>{msg.author.alias}: </span>
									<span>{msg.text}</span>
								</div>
							</>
						)
					})
				)}
			</div>
		</>
	)
}

export default Chat
