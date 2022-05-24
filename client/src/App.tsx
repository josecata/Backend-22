import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import AddCart from './components/AddCart/AddCart'
import ProductList from './components/ProductList/ProductList'
import "./Styles/App.css"
import Chat from './components/chat/chat'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route path='/' element={<ProductList/>}/>
					<Route path='/addProduct' element={<AddProduct />}/>
					<Route path='/addCart' element={<AddCart/>}/>
					<Route path='/chat' element={<Chat/>}/>
				</Routes>
			</main>
		</BrowserRouter>
	)
}
export default App
