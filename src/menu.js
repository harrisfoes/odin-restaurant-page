
const createMenu = () => {
    console.log('this is menu');

    //home page
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //menu card
    const menuCard = document.createElement('div')
    menuCard.classList.add('menu-card');
    menuCard.innerHTML = '<h1>Our Menu</h1>';

    const item_1 = document.createElement('div');
    item_1.classList.add('item-name');
    item_1.textContent = 'Kulam Burger';

    const desc_1 = document.createElement('div');
    desc_1.classList.add('item-desc');
    desc_1.textContent = 'Our all time favorite made of 100% pure beef patty and definitely no additives, topped with your choice of colselaw, cheese, butter, spring vegetables, and a pork chop slice.';

    const price_1 = document.createElement('div');
    price_1.classList.add('item-price');
    price_1.textContent = '200 PHP';

    menuCard.appendChild(item_1);
    menuCard.appendChild(desc_1);
    menuCard.appendChild(price_1);

    const item_2 = document.createElement('div');
    item_2.classList.add('item-name');
    item_2.textContent = 'Drenched Fries';

    const desc_2 = document.createElement('div');
    desc_2.classList.add('item-desc');
    desc_2.textContent = 'Fries drenched in melted cheese topped with whole ribeye steaks. What more can you ask for?';

    const price_2 = document.createElement('div');
    price_2.classList.add('item-price');
    price_2.textContent = '230 PHP';

    menuCard.appendChild(item_2);
    menuCard.appendChild(desc_2);
    menuCard.appendChild(price_2);

    const item_3 = document.createElement('div');
    item_3.classList.add('item-name');
    item_3.textContent = 'Cozy Drink';

    const desc_3 = document.createElement('div');
    desc_3.classList.add('item-desc');
    desc_3.textContent = 'This drink feels like a hug from a fluffy teddybear that doubles as a couch';

    const price_3 = document.createElement('div');
    price_3.classList.add('item-price');
    price_3.textContent = '180 PHP';

    menuCard.appendChild(item_3);
    menuCard.appendChild(desc_3);
    menuCard.appendChild(price_3);

    menu.appendChild(menuCard);
    content.appendChild(menu);
}

export { createMenu }