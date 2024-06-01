export default function createUrl(word) {
	let editedUrl = word
	if (editedUrl.includes(",")) {
		editedUrl = editedUrl.slice(",")
	}
	editedUrl = word.trim().split(" ").join("-")
	return editedUrl
}
