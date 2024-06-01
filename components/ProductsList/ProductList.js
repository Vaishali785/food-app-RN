import { View, FlatList } from "react-native"
import React, { useEffect } from "react"
import useFetchApi from "../../hooks/useFetchApi"
import { getProduct } from "../../store/apis"
import ProductItem from "../Item/ProductItem"

const ProductList = ({ subCat }) => {
	const { getData, data, error } = useFetchApi()
	useEffect(() => {
		getData(getProduct(subCat))
	}, [])
	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				height: "100%",
				paddingHorizontal: 20,
				paddingVertical: 20,
			}}
		>
			<FlatList
				data={data?.products}
				renderItem={({ item }) => (
					<ProductItem
						productItemName={item.product.name}
						productFormattedSize={item.productVariant.formattedPacksize}
						productWeight={item.productVariant.weightInGms}
						productPrice={item.productVariant.mrp}
						productVariantId={item.productVariant.id}
					/>
				)}
				keyExtractor={(item) => item.productVariant.id}
				horizontal={false}
				vertical={true}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
					gap: 6,
				}}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: 20,
				}}
			/>
		</View>
	)
}

export default ProductList
