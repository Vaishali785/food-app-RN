export const getAllCategories = () =>
	"https://8s8yxba6g8.execute-api.ap-south-1.amazonaws.com/api/categories"
export const getAllSubCategories = (id) =>
	`https://8s8yxba6g8.execute-api.ap-south-1.amazonaws.com/api/getSubCategories?parentId=${id}`
export const getProduct = (id) =>
	`https://8s8yxba6g8.execute-api.ap-south-1.amazonaws.com/api/data-by-category?subId=${id}`

export const baseUrl =
	"https://cdn.zeptonow.com/production///tr:w-969,ar-690-650,pr-true,f-auto,q-80/"
