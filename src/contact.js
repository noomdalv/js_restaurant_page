const loadContact = () => {
	let content = document.getElementById("content")
	let template = `<div id="contact-container">
										<p>Author:
											Vlad L.</p>
										<p>Github:
											<a href="https://github.com/noomdalv">@noomdalv</a></p>
										<p>Email:
											vladlunasan@gmail.com</p>
									</div>`
	content.innerHTML = template;
}

export default loadContact;
