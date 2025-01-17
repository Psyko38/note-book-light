let functionPath = "";

create_home_page();


function create_home_page() {
	functionPath = document.querySelector(".page-def");
	addElement(functionPath, "h1", "All Nots", "", "", "", "", "", "");
	createBtn(
		"React Performance Optimization",
		"Dev",
		"React",
		"29 Oct 2024",
		""
	);
	createBtn("Japan Travel Planning", "Travel", "Personal", "28 Oct 2024", "");
	createBtn(
		"Favorite Pasta Recipes",
		"Cooking",
		"Recipes",
		"27 Oct 2024",
		""
	);
	createBtn("Weekly Workout Plan", "Dev", "React", "25 Oct 2024", "");
	createBtn("Meal Prep Ideas", "Cooking", "Health", "25 Oct 2024", "Recipes");
	createBtn("Reading List", "Personal", "Dev", "05 Oct 2024", "");
	functionPath = document.querySelector(".page-def");
	addElement(functionPath, "button", "", "Not", "", "", "", "", "");
	functionPath = document.querySelector(".Not:last-child");
	addElement(functionPath, "div", "", "not#", "", "", "", "", "");
	functionPath = document.querySelector(".Not:last-child > div");
	addElement(
		functionPath,
		"p",
		"Fitness Goals 2025",
		"Not-title",
		"",
		"",
		"",
		"",
		""
	);
	functionPath = document.querySelector(".page-def");
	addElement(functionPath, "button", "", "plus", "", "", "", "", "");
	functionPath = document.querySelector(".page-def > button:last-child");
	addElement(functionPath, "img", "", "", "", "asset/+.svg", "+", "", "");
}

function createBtn(title, tag1, tag2, date, tag3) {
	functionPath = document.querySelector(".page-def");
	addElement(functionPath, "button", "", "Not", "", "", "", "", "");
	functionPath = document.querySelector(".Not:last-child");
	addElement(functionPath, "div", "", "not#", "", "", "", "", "");
	functionPath = document.querySelector(".Not:last-child > div");
	addElement(functionPath, "p", title, "Not-title", "", "", "", "", "");
	addElement(functionPath, "div", "", "not-tag", "", "", "", "", "");
	functionPath = document.querySelector(".Not:last-child > div > .not-tag");
	addElement(functionPath, "p", tag1, "", "", "", "", "", "");
	addElement(functionPath, "p", tag2, "", "", "", "", "", "");
	if (tag3 != "") {
		addElement(functionPath, "p", tag3, "", "", "", "", "", "");
	}
	functionPath = document.querySelector(".Not:last-child > div");
	addElement(functionPath, "p", date, "Not-date", "", "", "", "", "");
	functionPath = document.querySelector(".page-def");
	addElement(functionPath, "hr", "", "HrNav2", "", "", "", "", "");
}

function addElement(path, tag, text, classs, id, src, alt, type, name) {
	const ElementTag = document.createElement(tag);
	if (text != "") {
		ElementTag.innerText = text;
	}
	if (classs != "") {
		ElementTag.className = classs;
	}

	if (id != "") {
		ElementTag.id = id;
	}

	if (src != "") {
		ElementTag.src = src;
	}

	if (alt != "") {
		ElementTag.alt = alt;
	}

	if (type != "") {
		ElementTag.type = type;
	}

	if (name != "") {
		ElementTag.name = name;
	}

	path.appendChild(ElementTag);
}
