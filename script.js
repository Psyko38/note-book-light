const addbtn = document.querySelector(".plus");

const editpage = document.getElementById("page");
const editnavbar = document.getElementById("navbar");
const editpagedef = document.getElementById("page-def");
const GoBackBtn = document.getElementById("GoBack");
const HomeBtn = document.getElementById("Home");

addbtn.addEventListener("click", () => {
	editpage.style.display = "unset";
	editnavbar.style.display = "unset";
	editpagedef.style.display = "none";
});

GoBackBtn.addEventListener("click", () => {
	editpage.style.display = "none";
	editnavbar.style.display = "none";
	editpagedef.style.display = "unset";
});

HomeBtn.addEventListener("click", () => {
	editpage.style.display = "none";
	editnavbar.style.display = "none";
	editpagedef.style.display = "unset";
});
