

const addNavbar = (() => {
	const content = document.getElementById('content');
	const navBar = document.createElement('nav');
	const navArr = ["Home Page", "Menu", "Contact"];
	const navList = document.createElement('ul');
	navList.id = "navList";
	content.appendChild(navBar);
	navBar.appendChild(navList);

	for (let i = 0; i < navArr.length; i++) {

		let li = `<li class="nav-element"><a href="#">${navArr[i]}</a></li>`		

		navList.innerHTML += li;
	}



})();
