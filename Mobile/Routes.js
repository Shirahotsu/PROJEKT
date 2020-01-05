import React from "react"
import { Router, Scene } from "react-native-router-flux"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import { Button } from "native-base"

const Routes = ({ onMenuButtonClick }) => (
	<Router>
		<Scene key="root" hideNavBar= "true">
			<Scene key="home" component={Home} title="Home" initial={true} />
			<Scene key="about" component={About} title="About" />
		</Scene>
	</Router>
)
export default Routes
