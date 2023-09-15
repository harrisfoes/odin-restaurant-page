//the page loader is where the logic for the page views will be

import { createContact } from "./contact";
import { createHomePage } from "./homePage";
import { createMenu } from "./menu";

const pageLoader = () => {
    //createBanner();
    createTabs();
    createHomePage();
    createFooter();
    console.log("this is page loader!");
}

const onClickHome = () => {
    console.log('onclickhome');
    clearPage();
    createTabs();
    createHomePage();
    createFooter();
}

const onClickMenu = () => {
    console.log('onClickMenu');
    clearPage();
    createTabs();
    createMenu();
    createFooter();
}

const onClickContact = () => {
    console.log('on click contact');
    clearPage();
    createTabs();
    createContact();
    createFooter();
}

const clearPage = () => {
    const content = document.getElementById('content');
    content.innerHTML = "";
}

const createBanner = () => {

    const content = document.getElementById('content');
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.textContent = "This is a banner";
    
    content.appendChild(banner);
}

const createTabs = () => {
    const content = document.getElementById('content');

    const nav = document.createElement('nav');
    nav.classList.add('links');

    const restaurantName = document.createElement('div');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerHTML = "<h1>Kulam Burger Jowent</h1>"
    
    const ul = document.createElement('ul');

    const button1 = document.createElement('button');
    button1.textContent = 'Home';
    
    const link1 = document.createElement('li');
    link1.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = 'Menu';
    
    const link2 = document.createElement('li');
    link2.appendChild(button2);
    
    const button3 = document.createElement('button');
    button3.textContent = 'Contact';
    
    const link3 = document.createElement('li');
    link3.appendChild(button3);

    //appending items
    ul.appendChild(link1);
    ul.appendChild(link2);
    ul.appendChild(link3);

    nav.appendChild(restaurantName);
    nav.appendChild(ul);

    content.appendChild(nav);

    //adding event listeners
    button1.addEventListener("click", onClickHome);
    button2.addEventListener("click", onClickMenu);
    button3.addEventListener("click", onClickContact)
}

const createFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    footer.textContent = "made by harrisfoes";
    content.appendChild(footer);
}




export { pageLoader, onClickMenu }