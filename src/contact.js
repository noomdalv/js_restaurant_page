const loadContact = () => {
  const content = document.getElementById('content');
  const template = `<div id="contact-container">
										<p><b>Author :</b>  Vlad L.</p>
										<p><b>Github :</b><a href="https://github.com/noomdalv">  @noomdalv</a></p>
										<p><b>Email :</b>  vladlunasan@gmail.com</p>
									</div>`;
  content.innerHTML = template;
};

export default loadContact;
