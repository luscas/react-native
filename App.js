import React, { Component } from 'react';
import {
	StyleSheet,
	Button,
	Text,
	View,
	Dimensions,
	Image
} from 'react-native';

// import SvgUri from 'react-native-svg-uri';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: new Date()
		};
	}

	render() {
		  return (
				<View style={styles.container}>
					<Text style={styles.createAccountText}>Create an account</Text>
					<Text style={styles.connectWithWorld}>
						Connect with people{"\n"}
						around the world
					</Text>

					<View>
						<Image
							style={styles.slide1}
							source={require('./assets/slide-1.png')}
						/>

						<Text style={ styles.textSlide1 }>
							Users will be able to go live, chat and{"\n"}
							meet with people near by.
						</Text>
					</View>

					<View style={styles.options}>
						<View style={styles.optionActive}/>
						<View style={styles.option}/>
						<View style={styles.option}/>
					</View>

					<View style={ styles.buttons }>
						<Text style={ styles.buttonDepressed }>SKIP</Text>
						<Text style={ styles.buttonPrimary }>NEXT</Text>
					</View>
				</View>
			);
	}
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
	},
	createAccountText: {
		marginTop: 77,
		marginLeft: 20,
		fontSize: 16,
		color: "#3E4A59"
	},
	connectWithWorld: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#0F1950",
		marginTop: 21,
		marginLeft: 20
	},
	slide1: {
		width: 286,
		height: 200,
		marginTop: 70,
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'center'
	},
	textSlide1: {
		fontSize: 16,
		color: "#000F5D",
		marginTop: 71.16,
		textAlign: "center"
	},
	options: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: 30
	},
	option: {
		backgroundColor: "#B5BBDF",
		width: 6,
		height: 6,
		borderRadius: 100,
		marginRight: 6
	},
	optionActive: {
		backgroundColor: "#6C63FF",
		width: 6,
		height: 6,
		borderRadius: 100,
		marginRight: 6
	},
	buttons: {
		width: width - 30,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: 14,
		fontWeight: "bold"
	},
	buttonDepressed: {
		color: "#677495"
	},
	buttonPrimary: {
		color: "#6C63FF"
	}
});
