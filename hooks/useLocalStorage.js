import { useEffect, useState } from "react"
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

const useLocalStorage = () => {
	// const initialData = JSON.stringify({ items: [], totalAmount: 0 })
	const [value, setValue] = useState()
	const { getItem, setItem } = useAsyncStorage("selectedItems")

	const readItemFromStorage = async () => {
		const item = await getItem()
		setValue(JSON.parse(item))
	}

	const writeItemToStorage = async (newItem) => {
		let updatedItems, updatedTotalAmount
		try {
			let cartItems = getItem()

			if (cartItems && cartItems.items) {
				updatedTotalAmount = cartItems.totalAmount + newItem.num * newItem.price
				const existingCartItemIndex = cartItems.items.findIndex(
					(item) => item.id == newItem.id
				)
				const existingCartItem =
					cartItems.items && cartItems.items[existingCartItemIndex]
				if (existingCartItem) {
					const updatedItem = {
						...existingCartItem,
						num: existingCartItem.num + newItem.num,
					}
					updatedItems = [...cartItems.items]
					updatedItems[existingCartItemIndex] = updatedItem
				} else {
					updatedItems = cartItems.items.concat(action.item)
				}
			} else {
				cartItems = {
					items: [newItem],
					totalAmount: newItem.price,
				}
				// cartItems.items.push(newItem)
				// cartItems.totalAmount = newItem.price
			}

			let newCartItems = {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			}
			// await AsyncStorage.setItem("selectedItems", JSON.stringify(newCartItems))
			const json = JSON.stringify(newCartItems)

			await setItem(json)
			setValue(json)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		readItemFromStorage()
	}, [])

	return { value, writeItemToStorage }
}

export default useLocalStorage
