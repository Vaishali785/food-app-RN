import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import { router } from "expo-router"
import GlobalColors from "../../assets/styles/GlobalColors"
import { baseUrl } from "../../store/apis"

const Item = ({ item }) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() =>
				router.navigate({
					pathname: `${item.name}/${item?.availableSubcategories[0].name}`,
					params: {
						parentId: `${item.id}`,
						currentPage: `${item?.availableSubcategories[0].name}`,
						currentPageId: item?.availableSubcategories[0].id,
						catName: `${item.name}`,
						currentImg: `${
							baseUrl + (item.imageWithName.path ?? item.imageWithNameV2.path)
						}`,
					},
				})
			}
		>
			{/* <Image source={require("../../assets/placeholder.png")} /> */}
			<Image
				resizeMode="contain"
				style={{
					width: 80,
					height: 80,
					borderRadius: 10,
					padding: 10,
				}}
				source={{
					uri: `${
						baseUrl + (item.imageWithName.path ?? item.imageWithNameV2.path)
					}`,
				}}
			/>
			{/* <Text numberOfLines={2} style={styles.itemName}>
				{item.name}
			</Text> */}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		width: 80,
		height: 100,
		gap: 5,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	itemName: {
		color: GlobalColors.itemText,
		textAlign: "center",
	},
})
export default Item
