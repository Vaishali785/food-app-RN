import { View, Text, Image, StyleSheet } from "react-native"
import React, { useState } from "react"
import GlobalColors from "../../assets/styles/GlobalColors"
import AddItemBtn from "../AddItemBtn/AddItemBtn"

const ProductItem = (props) => {
	const [checkSelected, setCheckSelected] = useState()
	const [itemCount, setItemCount] = useState(0)

	const handleSelected = (item) => {
		setCheckSelected(true)
		if (itemCount == 0) {
			handleAddItem(item)
		}
	}
	const handleAddItem = (newItem) => {
		setItemCount((count) => (count += 1))
	}
	const handleRemoveItem = () => {
		if (itemCount > 1) {
			setItemCount((count) => (count -= 1))
		} else {
			setCheckSelected(false)
		}
	}

	const weight =
		props.productWeight > 1000
			? props.productWeight / 1000 + "kg"
			: props.productWeight + "g"
	return (
		<View
			style={{
				gap: 40,
				overflow: "hidden",
				alignItems: "center",
				marginHorizontal: "auto",
				justifyContent: "flex-start",
                width:"49%",
                paddingHorizontal:10,
                paddingVertical:10,
			}}
		>
			<View style={{ width: "100%" }}>
				<Image source={require("../../assets/product.png")} />
				<AddItemBtn
					itemSelected={checkSelected}
					itemSelect={handleSelected}
					itemCount={itemCount}
					itemAdd={handleAddItem}
					itemRemove={handleRemoveItem}
					itemId={props.productVariantId}
					itemPrice={props.productPrice}
					itemNum={1}
				/>
			</View>
			<View style={{ width: "100%", gap: 5, fontSize: 12 }}>
				<Text
					numberOfLines={2}
					android_hyphenationFrequency="full"
					style={styles.productName}
				>
					{props.productItemName}
				</Text>
				<Text style={styles.productWeight} numberOfLines={2}>
					{props.productFormattedSize ? props.productFormattedSize : weight}
				</Text>
				<Text style={styles.productPrice}>
					&#8377;{props.productPrice / 100}
				</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	productName: {
		color: GlobalColors.itemText,
		fontFamily: "Inter_600SemiBold",
		fontSize: 13,
		width: "100%",
        lineHeight:16 ,
        minHeight: 32
	},
    productWeight:{
        minHeight: 32,
        fontFamily: "Inter_500Medium",
        color: GlobalColors.textColor,
        width: "100%",
        fontSize: 12
    },
	productPrice: {
        color: GlobalColors.itemText,
        fontFamily: "Inter_700Bold",
        fontSize: 13,
	},
})

export default ProductItem
