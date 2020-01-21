import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const loadIndex = () => {
  // PageLoad, creates Navbar + Content containers
  const loadPage = () => {
    const navTitle = document.createElement('h3');
    navTitle.id = 'navTitle';
    navTitle.innerHTML = 'Restaurant JavaScript';

    const navBar = document.createElement('nav');
    const navArr = ['Contact', 'Menu', 'Home'];
    const navList = document.createElement('ul');
    navList.id = 'navList';
    document.body.appendChild(navBar);
    navBar.appendChild(navTitle);
    navBar.appendChild(navList);

    // Navbar Link Creation
    for (let i = 0; i < navArr.length; i++) {
      const li = `<li class="nav-element" id="link-${navArr[i].toLowerCase()}">${navArr[i]}</li>`;
      navList.innerHTML += li;
    }

    // MAIN CONTAINER
    const content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);
  };

  // EventListeners for links
  const loadEvents = () => {
    document.getElementById('link-home').addEventListener('click', () => { loadHome(); });
    document.getElementById('link-menu').addEventListener('click', () => { loadMenu(); });
    document.getElementById('link-contact').addEventListener('click', () => { loadContact(); });
  };

  return { loadPage, loadEvents };
};

const loader = loadIndex();
loader.loadPage();
loader.loadEvents();
loadHome();
