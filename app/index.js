import { View, ScrollView } from "react-native"
import React, { useEffect } from "react"
import useFetchApi from "../hooks/useFetchApi"
import { getAllCategories } from "../store/apis"
import Item from "../components/Item/Item"
import Header from "../components/Header/Header"

import {
	useFonts,
	Inter_600SemiBold,
	Inter_500Medium,
	Inter_700Bold,
} from "@expo-google-fonts/inter"

const index = () => {
	const { getData, data } = useFetchApi()
	useEffect(() => {
		getData(getAllCategories())
	}, [])
	let [fontsLoaded] = useFonts({
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	})

	if (!fontsLoaded) {
		return null
	}
	return (
		<View
			style={{
				backgroundColor: "white",                
			}}
		>
			<Header />
			<ScrollView>
                <View style={{
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 13,
					paddingTop: 15,
					paddingHorizontal: 12,
					paddingBottom: 120,
                }}>
                    {data?.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </View>
			</ScrollView>
		</View>
	)
}

export default index
