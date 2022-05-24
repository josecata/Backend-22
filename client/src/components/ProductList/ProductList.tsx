import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

const ProductList: React.FC = () => {
	interface Product {
		id: number
		timestamp: number
		nombre: string
		descripcion: string
		codigo: string
		url: string
		precio: string
		stock?: number
	}
	const [backendData, setBackendData] = useState<[Product] | undefined>(undefined)
	const [admin, setAdmin] = useState(true)

	useEffect(() => {
		fetch('/api/productos')
			.then((response: any = {}) => response.json())
			.then((data: any = {}) => {
				if (data.length != 0) {
					setBackendData(data)
				}
			})
	}, [])

	return (
		<>
			<div className='product-list'>
				{backendData === undefined ? (
					<p>Esperando productos...</p>
				) : (
					backendData.map((product: any, i: any) => {
						return <Product key={i} product={product} />
					})
				)}
			</div>
			{admin ? <Link to='/addProduct'>Agregar producto</Link> : null}

			<Link to='/addCart'>Agregar un nuevo carrito</Link>
		</>
	)
}

export default ProductList
