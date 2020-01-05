import React from "react"
import { Container, Text, Body } from "native-base"

const SingleProduct = ({ product }) => {
	return (
		<Body>
			<Text>{product.name}</Text>
			<Text>{product.quantity}</Text>
		</Body>
	)
}
export default SingleProduct
