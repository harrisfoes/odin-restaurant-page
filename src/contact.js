
const createContact = () => {
    console.log('this is menu');

    //home page
    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    //copy text
    const contactCard = document.createElement('div')
    contactCard.classList.add('contact-card');
    contactCard.innerHTML = '<h1>Reach us</h1>';

    const item_1 = document.createElement('div');
    item_1.classList.add('contact-name');
    item_1.textContent = 'Phone';

    const desc_1 = document.createElement('div');
    desc_1.classList.add('contact-desc');
    desc_1.innerHTML = '555-5555 <br> 888-8888';

    contactCard.appendChild(item_1);
    contactCard.appendChild(desc_1);

    const item_2 = document.createElement('div');
    item_2.classList.add('contact-name');
    item_2.textContent = 'Address';

    const desc_2 = document.createElement('div');
    desc_2.classList.add('contact-desc');
    desc_2.innerHTML = '541 Dark Road Street. Madeupville Falsetucky, Maringo Valley New Warpscotch. VA WC';

    contactCard.appendChild(item_2);
    contactCard.appendChild(desc_2);

    const item_3 = document.createElement('div');
    item_3.classList.add('contact-name');
    item_3.textContent = 'Email and Socials';

    const desc_3 = document.createElement('div');
    desc_3.classList.add('contact-desc');
    desc_3.innerHTML = 'gargantomaki@noodle.com <br> wachitapalayupak@hahoo.com <br> @kulamboy on instagram';

    contactCard.appendChild(item_3);
    contactCard.appendChild(desc_3);

    contact.appendChild(contactCard);
    content.appendChild(contact);
}

export { createContact }