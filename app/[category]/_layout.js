import React, { useEffect } from "react"
import { Slot, Stack, useLocalSearchParams } from "expo-router"
import useFetchApi from "../../hooks/useFetchApi"
import { getAllSubCategories } from "../../store/apis"
import GlobalColors from "../../assets/styles/GlobalColors"
import { ScrollView, View } from "react-native"
import SubCatItem from "../../components/Item/SubCatItem"
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader"

const CatLayout = () => {
	const { getData, data: allSubCat, error } = useFetchApi()
	useEffect(() => {
		getData(getAllSubCategories(parentId))
	}, [])
	const { parentId, catName, currentPage, currentPageId, currentImg } =
		useLocalSearchParams()
	return (
		<>
			<CategoryHeader catName={catName} currentImg={currentImg} />
			<View style={{ backgroundColor: "white", flexDirection: "row" }}>
				<ScrollView
					contentContainerStyle={{
						alignItems: "flex-start",
						paddingTop: 10,
						borderRightColor: GlobalColors.borderColor,
						borderRightWidth: 1,
						paddingBottom: 80,
					}}
					showsVerticalScrollIndicator={false}
				>
					{allSubCat?.subCategories?.map((item) => (
						<SubCatItem
							key={item.id}
							parentId={parentId}
							parentName={catName}
							item={item}
						/>
					))}
				</ScrollView>
				<View style={{ width: "80%" }}>
					<Slot />
				</View>
			</View>
		</>
	)
}

export default CatLayout
