const loadHome = () => {
	let content = document.getElementById("content");
	let template = `<div id="home-container">
											<img src="../src/img/img_main.jpeg" id="img-home" alt="homeImg">
											<h2 id="home-heading">Enjoy Our Delicious Meals!</h2>
										</div>`
	content.innerHTML = template;
}

export default loadHome;
