const loadMenu = () => {
	let content = document.getElementById("content")
	let template = `<div id="menu-container">
								<div class"menu-box">
									<img src="../src/img/d1_mongolian_meatball_ramen.jpg" alt="meatball_ramen">
									<p>Mongolian Meatball Ramen</p>
								</div>
								<div class"menu-box">
									<img src="../src/img/d2_garlic_beef_lo_mein.jpg" alt="beef_lomein">
									<p>Garlic Beef LoMein</p>
								</div>
								<div class"menu-box">
									<img src="../src/img/d3_vegetable_manchurian_dry.jpg" alt="veggie_manchurian">
									<p>Vegetable Manchurian Dry</p>
								</div>
								<div class"menu-box">
									<img src="../src/img/d4_indian_vegetable_curry.jpg" alt="veggie_curry">
									<p>Indian Vegetable Curry</p>
								</div>
								<div class"menu-box">
									<img src="../src/img/d5_chicken_rice_veggies.jpg" alt="chicken_rice_veggies">
									<p>Chicken Rice Vegetables</p>
								</div>
								<div class"menu-box">
									<img src="../src/img/d6_thai_basil_beef.jpg" alt="thasil_beef">
									<p>Thai Basil Beef</p>
								</div>
							</div>`
	content.innerHTML = template;
};

export default loadMenu;
