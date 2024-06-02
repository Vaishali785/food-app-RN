import { View } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"
import ProductList from "../../components/ProductsList/ProductList"

const CategoryPage = () => {
	const { parentId, catName, currentPage, currentPageId } =
		useLocalSearchParams()
	return (
		<View style={{width:"100%"}}>
			<ProductList subCat={currentPageId} />
		</View>
	)
}

export default CategoryPage
