import React from "react"
import { AppRegistry, Image, StatusBar } from "react-native"
import { Container, Content, Text, List, ListItem } from "native-base"
import { Actions } from "react-native-router-flux"
const routes = [
	{
		name: "Home",
		link: "home"
	},
	{
		name: "About",
		link: "about"
	}
]
const goTo = link => {
	switch (link) {
		case "home":
			Actions.home()
			break
		case "about":
			Actions.about()

		default:
			break
	}
}
const SideBar = ({onChoosed})=>(
  <Container>
				<Content>
					<List
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem button onPress={() => {goTo(data.link); onChoosed()}}>
									<Text>{data.name}</Text>
								</ListItem>
							)
						}}
					/>
				</Content>
			</Container>
)
export default SideBar