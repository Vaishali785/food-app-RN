import { View, Text, Image, StyleSheet } from "react-native"
import React, { useState } from "react"
import GlobalColors from "../../assets/styles/GlobalColors"
import AddItemBtn from "../AddItemBtn/AddItemBtn"
import useLocalStorage from "../../hooks/useLocalStorage"

const ProductItem = (props) => {
	const { itemId } = props.productVariantId
	const [checkSelected, setCheckSelected] = useState()

	const { value } = useLocalStorage()

	const weight =
		props.productWeight > 1000
			? props.productWeight / 1000 + "kg"
			: props.productWeight + "g"
	return (
		<View
			style={{
				gap: 35,
				overflow: "hidden",
				alignItems: "center",
				marginHorizontal: "auto",
				justifyContent: "flex-start",
			}}
		>
			<View style={{ width: "100%" }}>
				<Image source={require("../../assets/product.png")} />
				<AddItemBtn
					itemSelected={props.checkSelected}
					itemId={props.productVariantId}
					itemPrice={props.productPrice}
				/>
			</View>
			<View style={{ width: "100%", gap: 10, fontSize: 12 }}>
				<Text
					numberOfLines={2}
					android_hyphenationFrequency="none"
					style={styles.productName}
				>
					{props.productItemName}
				</Text>
				<Text style={{ color: GlobalColors.textColor }}>
					{props.productFormattedSize ? props.productFormattedSize : weight}
				</Text>
				<Text
					style={{
						color: GlobalColors.itemText,
						fontFamily: "Inter_700Bold",
						fontSize: 15,
					}}
				>
					&#8377;{props.productPrice / 100}
				</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	productName: {
		color: GlobalColors.itemText,
		fontFamily: "Inter_500Medium",
		fontSize: 15,
		width: 80,
	},
	productPrice: {
		fontFamily: "Inter_700Bold",
	},
})

export default ProductItem
