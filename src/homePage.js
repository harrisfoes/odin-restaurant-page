import { onClickMenu } from "./pageLoad";

const createHomePage = () => {
    console.log('this is homepage');

    //home page
    const content = document.getElementById('content');
    const homePage = document.createElement('div');
    homePage.classList.add('home');

    //copy text
    const copyText = document.createElement('div')
    copyText.classList.add('copy-text');
    copyText.innerHTML = '<h1>THE YUMMIEST BURGER IN TOWN</h1>';

    //button
    const button = document.createElement('button');
    button.classList.add('view-menu');
    button.textContent = "VIEW OUR MENU";

    button.addEventListener("click", onClickMenu);

    copyText.appendChild(button);
    homePage.appendChild(copyText);
    content.appendChild(homePage);
}

export { createHomePage }