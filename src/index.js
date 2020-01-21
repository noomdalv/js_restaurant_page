import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

const loadIndex = () => {

	//PageLoad, creates Navbar + Content containers
	const loadPage = () => {
		const navTitle = document.createElement("h3");
		navTitle.id = "navTitle"
		navTitle.innerHTML = "RESTAURANT";

		const navBar = document.createElement('nav');
		const navArr = ["Contact", "Menu", "Home"];
		const navList = document.createElement('ul');
		navList.id = "navList";
		document.body.appendChild(navBar);
		navBar.appendChild(navTitle);
		navBar.appendChild(navList);

		//Navbar Link Creation
		for (let i = 0; i < navArr.length; i++) {
			let li = `<li class="nav-element" id="link-${navArr[i].toLowerCase()}">${navArr[i]}</li>`
			navList.innerHTML += li;
		}

		//MAIN CONTAINER
		const content = document.createElement('div');
		content.id = "content"
		document.body.appendChild(content);
	}

	//EventListeners for links
	const loadEvents = () => {
		document.getElementById('link-home').addEventListener("click", function(){ loadHome() });
		document.getElementById('link-menu').addEventListener("click", function(){ loadMenu() } );
		document.getElementById('link-contact').addEventListener("click", function(){ loadContact() });
	}

	return { loadPage, loadEvents }
};

const loader = loadIndex();
loader.loadPage();
loader.loadEvents();
loadHome();
