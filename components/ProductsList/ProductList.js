import { View, FlatList, Pressable, Text, StyleSheet } from "react-native"
import React, { useEffect,useState } from "react"
import useFetchApi from "../../hooks/useFetchApi"
import { getProduct } from "../../store/apis"
import ProductItem from "../Item/ProductItem"
import Ionicons from "@expo/vector-icons/Ionicons"
import GlobalColors from "../../assets/styles/GlobalColors"


const ProductList = ({ subCat }) => {
	const { getData, data, error } = useFetchApi()
    const [sortingOrder,setSortingOrder] = useState("asc");
    const [sortedData,setSortedData] = useState();
    const finalData = sortedData ? sortedData : data?.products 
    const handleSort = () => {
        let sortData =[] 
        if(sortingOrder=="asc"){
            sortData= finalData.sort((a,b)=> a.product.name < b.product.name ? -1 : 1)
            setSortingOrder("desc")
        }else{
            sortData = finalData.sort((a,b)=> b.product.name < a.product.name ? -1 : 1)
            setSortingOrder("asc")
        }
        setSortedData(sortData);
    }
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
                paddingBottom: 50
			}}
		>
            
			<FlatList
				data={finalData}
                ListHeaderComponent={()=>(
                        <Pressable onPress={handleSort} style={styles.sortBtn}>
                            <Text style={{color: GlobalColors.itemText}}>Sort</Text>
                            {
                                sortingOrder == "asc" ? 
                                <Ionicons name="arrow-up-outline" size={14} color={GlobalColors.itemText} />
                                :
                                <Ionicons name="arrow-down-outline" size={14} color={GlobalColors.itemText} />
                            }
                        </Pressable>
                )}
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
                    paddingTop: 20,
					justifyContent: "flex-start",
					alignItems: "flex-start",
					gap: 5,
                    paddingBottom: 40
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
    sortBtn:{
        borderWidth: 1,
        borderColor: GlobalColors.itemText,
        borderRadius: 50,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical: 5,
        gap:5
    }
})

export default ProductList
