import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import GlobalColors from "../../assets/styles/GlobalColors"
import { useRouter, useSegments } from "expo-router"
import SearchBtn from "./SearchBtn"

const CategoryHeader = (props) => {
	const router = useRouter()
	const segments = useSegments()
	return (
		<View style={[styles.header]}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
					// marginLeft: -20,
				}}
			>
				{segments.length > 1 && (
					<Ionicons
						name="chevron-back-outline"
						size={24}
						color={GlobalColors.backBtn}
						onPress={() => router.back()}
					/>
				)}
				<Image
					resizeMode="contain"
					style={{ width: 40, height: 40, borderRadius: 100 }}
					source={{ uri: `${props.currentImg}` }}
				/>
				<Text
					style={{
						fontFamily: "Inter_600SemiBold",
						color: GlobalColors.textColor,
						fontSize: 15,
					}}
				>
					{props.children || props.catName}
				</Text>
				<Ionicons
					name="chevron-down-outline"
					size={18}
					color={GlobalColors.textColor}
				/>
			</View>
			<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
				<SearchBtn />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		borderBottomWidth: 1,
		padding: 24,
		fontWeight: 600,
		fontSize: 25,
		borderBottomColor: GlobalColors.borderColor,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logoText: {
		fontSize: 18,
	},
})

export default CategoryHeader
