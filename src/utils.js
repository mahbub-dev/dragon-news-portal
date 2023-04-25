const displayTextSize = (text = "") => {
	const texts = text.split(" ").slice(0, 45).join(" ") + "...";
	return texts;
};
const changeBgColor = () => {
	document.querySelector("body").style.background = "#F3F3F3";
    return ''
};
export { displayTextSize, changeBgColor };
