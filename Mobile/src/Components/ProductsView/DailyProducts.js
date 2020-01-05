import React from "react"
import { Container, Card, CardItem, Body, Text } from "native-base"
import SingleProduct from "./SingleProduct"

const listProducts = () => {
	return productsTemp.map(item => {
		return (
			<CardItem>
					<SingleProduct product={item} />
			</CardItem>
		)
	})
}

const DailyProducts = () => {
	return (
			<Card>
				<CardItem>
					<Body>
						<Text>12/12/19</Text>
					</Body>
				</CardItem>
				{listProducts()}
			</Card>
	)
}
const productsTemp = [
	{
		name: "Kapusta",
		quantity: 10,
		pricePerUnit: 4,
		category: {
			name: "Jedzenie",
			icon: "pen",
			color: "red"
		}
	},
	{
		name: "Piwo",
		quantity: 20,
		pricePerUnit: 4,
		category: {
			name: "Alcohol",
			icon: "pen",
			color: "yellow"
		}
	},
	{
		name: "Wino",
		quantity: 20,
		pricePerUnit: 3,
		category: {
			name: "Alcohol",
			icon: "pen",
			color: "yellow"
		}
	},
	{
		name: "Wódka",
		quantity: 10,
		pricePerUnit: 2,
		category: {
			name: "Alcohol",
			icon: "pen",
			color: "yellow"
		}
	},
	{
		name: "Skiety",
		quantity: 5,
		pricePerUnit: 5,
		category: {
			name: "Ciuchy",
			icon: "pen",
			color: "blue"
		}
	},
	{
		name: "Klapki",
		quantity: 1,
		pricePerUnit: 20,
		category: {
			name: "Ciuchy",
			icon: "pen",
			color: "blue"
		}
	}
]
export default DailyProducts
