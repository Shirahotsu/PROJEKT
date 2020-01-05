import React from "react"
import { AppLoading } from "expo"
import { Container, Text, Drawer, Button, Header, Left, Icon, Body, Title, Right } from "native-base"
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import SideBar from "./src/Components/Menu/SideBar"
import Routes from "./Routes.js"
export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isReady: false
		}
	}
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  closeDrawer() {
		this._drawer._root.close()
	}
	openDrawer() {
		this._drawer._root.open()
	}
	render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
		return (
			<Drawer
				ref={ref => {
					this._drawer = ref
				}}
				content={<SideBar onChoosed={this.closeDrawer.bind(this)} navigator={this.navigator} />}
				onClose={() => this.closeDrawer()}
			>
        <Header style={{paddingTop: 20, height:80}}>
          <Left>
            <Button transparent onPress={this.openDrawer.bind(this)}>
              <Icon type="Ionicons" name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
				<Routes></Routes>
			</Drawer>
		)
	}
}
