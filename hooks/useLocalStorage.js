import { useEffect, useState } from "react"
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

const useLocalStorage = () => {
	const initialData = JSON.stringify({ items: [], totalAmount: 0 })
	const [value, setValue] = useState(initialData)
	const { getItem, setItem } = useAsyncStorage("selectedItems")

	const readItemFromStorage = async () => {
		const item = await getItem()
		setValue(JSON.parse(item))
		// console.log("HELLO", value)
	}

	const writeItemToStorage = async (item) => {
		await setItem(item)
		setValue(item)
	}
	const clearAll = async () => {
		console.log("----------------- clear -----------------")
		try {
			await AsyncStorage.clear()
            await AsyncStorage.removeItem('selectedItems')
		} catch (e) {
			// clear error
		}

		console.log("Done.")
	}

	useEffect(() => {
		readItemFromStorage()
		clearAll()
        console.log("value",value)
	}, [])
	return { value, writeItemToStorage, clearAll }
}

export default useLocalStorage
