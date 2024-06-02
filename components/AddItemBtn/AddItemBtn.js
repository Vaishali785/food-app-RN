import {
	Text,
	TouchableOpacity,
	Pressable,
	StyleSheet,
	View,
} from "react-native"
import React from "react"
import GlobalColors from "../../assets/styles/GlobalColors"
import Ionicons from "@expo/vector-icons/Ionicons"

const AddItemBtn = (props) => {
	const item = {
		id: props.itemId,
		price: parseInt(props.itemPrice) / 100,
		num: props.itemNum,
	}

	return (
		<>
			{props.itemSelected ? (
				<View style={[styles.btn, styles.countBtn]}>
					<Pressable
						onPress={props.itemRemove}
						style={{
							paddingHorizontal: 2,
							paddingVertical: 8,
						}}
					>
						<Ionicons name="remove-outline" size={14} color={"white"} />
					</Pressable>
					<Text style={styles.text}>{props.itemCount}</Text>
					<Pressable
						onPress={() => props.itemAdd(item)}
						style={{
							paddingHorizontal: 2,
							paddingVertical: 8,
						}}
					>
						<Ionicons name="add-outline" size={14} color={"white"} />
					</Pressable>
				</View>
			) : (
				<TouchableOpacity
					style={[styles.btn, styles.addBtn]}
					onPress={() => props.itemSelect(item)}
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
		bottom: -30,
	},
	countBtn: {
		backgroundColor: "#00486B",
		borderColor: "#00486B",
		justifyContent: "space-between",
		paddingHorizontal: 2,
		paddingVertical: 5,
		gap: 5,
		left: 15,
		// bottom: -15,
	},
	addBtn: {
		backgroundColor: "white",
		borderColor: GlobalColors.borderColor,
		padding: 10,
		paddingRight: 15,
		left: 20,
		// bottom: -30,
	},
	text: {
		color: "white",
		fontFamily: "Inter_500Medium",
		fontSize: 14,
		width: 20,
		textAlign: "center",
		margin: "auto",
	},
})

export default AddItemBtn
