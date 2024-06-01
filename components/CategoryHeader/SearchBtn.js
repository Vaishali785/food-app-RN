import { View, Text } from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import GlobalColors from "../../assets/styles/GlobalColors"

const SearchBtn = () => {
	return (
		<View>
			<Ionicons
				name="search-outline"
				size={24}
				color={GlobalColors.searchIcon}
			/>
		</View>
	)
}

export default SearchBtn
