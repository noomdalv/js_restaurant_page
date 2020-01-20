const loadIndex = (() => {
	const content = document.createElement('div');
	document.body.appendChild(content);

	//NAVBAR CREATION
	const navTitle = document.createElement("h3");
	navTitle.id = "navTitle"
	navTitle.innerHTML = "RESTAURANT";

	const navBar = document.createElement('nav');
	const navArr = ["Contact", "Menu", "Home"];
	const navList = document.createElement('ul');
	navList.id = "navList";
	content.appendChild(navBar);
	navBar.appendChild(navTitle);
	navBar.appendChild(navList);

	for (let i = 0; i < navArr.length; i++) {
		let li = `<li class="nav-element" id="${navArr[i].toLowerCase()}-link">${navArr[i]}</li>`

		navList.innerHTML += li;
	}

	//HOMEPAGE CONTENT

	let template = `<div id="home-container">
										<img src="https://stock.rtl.lu/rtl/800/rtl2008.lu/nt/p/2018/07/14/11/62cdc377b7c1e733b373d3ac719454eb.jpeg" id="img-home" alt="homeImg">
										<h2 id="home-heading">Enjoy Our Delicious Meals!</h2>
									</div>`
	content.innerHTML += template;

})();
