import { View, Text } from "react-native"
import React from "react"
import styles from "./style"

const Header = () => {
	return (
		<View style={styles.header}>
			<Text
				style={[
					{ fontFamily: "Inter_600SemiBold", textAlign: "center" },
					styles.logoText,
				]}
			>
				Ecom App
			</Text>
		</View>
	)
}

export default Header
