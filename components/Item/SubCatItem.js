import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import React from "react"
import { router, usePathname } from "expo-router"
import GlobalColors from "../../assets/styles/GlobalColors"
import { baseUrl } from "../../store/apis"

const SubCatItem = ({ item, parentName, parentId }) => {
	const pathUrl = usePathname()
	const path = decodeURIComponent(pathUrl)
	const linkedUrl = `/${parentName}/${item.name}`
	return (
		<>
			<TouchableOpacity
				style={[styles.subCatItem]}
				onPress={() =>
					router.replace({
						pathname: linkedUrl,
						params: {
							parentId: `${parentId}`,
							catName: `${parentName}`,
							currentPage: item.name,
							currentPageId: item.id,
						},
					})
				}
			>
				<Image
					source={{ uri: baseUrl + item.image.path }}
					style={{ width: 60, height: 60 }}
					resizeMode="contain"
				/>
				{/* <Image source={require("../../assets/placeholder.png")} /> */}
				<Text
					numberOfLines={2}
					style={[
						styles.subCatName,
						path == linkedUrl && {
							color: GlobalColors.itemText,
						},
					]}
				>
					{item.name}
				</Text>
				{path == linkedUrl && <View style={styles.selectedBorder} />}
			</TouchableOpacity>
		</>
	)
}

const styles = StyleSheet.create({
	subCatItem: {
		width: "100%",
		// height: 101,
		gap: 5,
		overflow: "hidden",
		alignItems: "center",
		marginHorizontal: "auto",
		justifyContent: "flex-start",
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
	subCatName: {
		textAlign: "center",
		width: "100%",
		fontSize: 10,
		color: GlobalColors.nonSelectedText,
		fontFamily: "Inter_500Medium",
	},
	selectedBorder: {
		backgroundColor: GlobalColors.selectedItem,
		width: 3,
		borderRadius: 0,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		position: "absolute",
		right: 0,
		top: 0,
		height: "120%",
	},
})

export default SubCatItem
