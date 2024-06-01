import { Text, TouchableOpacity, Pressable, StyleSheet } from "react-native"
import React from "react"
import GlobalColors from "../../assets/styles/GlobalColors"
import Ionicons from "@expo/vector-icons/Ionicons"
import useLocalStorage from "../../hooks/useLocalStorage"

const AddItemBtn = ({ itemSelected, itemId, itemPrice, itemNum = 1 }) => {
	const item = {
		id: itemId,
		price: parseInt(itemPrice) / 100,
		num: itemNum,
	}
	const { value, writeItemToStorage } = useLocalStorage()

	return (
		<>
			{itemSelected ? (
				<Pressable style={[styles.btn, styles.countBtn]}>
					<Ionicons name="add-outline" size={14} color={"white"} />
					<Text style={styles.text}>{1}</Text>
					<Ionicons name="remove-outline" size={14} color={"white"} />
				</Pressable>
			) : (
				<TouchableOpacity
					style={[styles.btn, styles.addBtn]}
					onPress={() => writeItemToStorage(item)}
				>
					<Ionicons name="add-outline" size={20} color={"black"} />
					<Text>Add</Text>
				</TouchableOpacity>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	btn: {
		flexDirection: "row",
		borderWidth: 1,
		borderRadius: 5,
		overflow: "hidden",
		justifyContent: "center",
		margin: "auto",
		position: "absolute",
		alignItems: "center",
		left: 20,
		bottom: -30,
	},
	countBtn: {
		backgroundColor: "#00486B",
		borderColor: "#00486B",
		justifyContent: "space-between",
		paddingHorizontal: 13,
		paddingVertical: 10,
		gap: 5,
		// bottom: -15,
	},
	addBtn: {
		backgroundColor: "white",
		borderColor: GlobalColors.borderColor,
		padding: 10,
		paddingRight: 15,
		// bottom: -30,
	},
	text: {
		color: "white",
		fontFamily: "Inter_500Medium",
		fontSize: 14,
	},
})

export default AddItemBtn
