import { StyleSheet } from "react-native"
import GlobalColors from "../../assets/styles/GlobalColors"

const styles = StyleSheet.create({
	header: {
		height: 80,
		borderBottomWidth: 1,
		padding: 24,
		fontWeight: 600,
		fontSize: 25,
		borderBottomColor: GlobalColors.borderColor,
	},
	logoText: {
		fontSize: 18,
	},
})

export default styles
