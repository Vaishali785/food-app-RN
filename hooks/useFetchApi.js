import { useEffect, useState } from "react"

const useFetchApi = () => {
	const [isLoading, setIsLoading] = useState()
	const [data, setData] = useState()
	const [error, setError] = useState()
	const getData = (url) => {
		setIsLoading(true)
		fetch(url)
			.then((data) => data.json())
			.then((result) => setData(result))
			.catch((err) => setError(err))
		setIsLoading(false)
	}
	// useEffect(() => {
	// }, [])
	return { data, isLoading, error, getData }
}

export default useFetchApi
