const requestURL = 'js/directory.json';

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const businesses = data['businesses'];
        businesses.forEach(business => {
            displayBusiness(business);
            // displayTable(prophet);
        });
    }
}

getBusiness(requestURL);

function displayBusiness(business) {
    let card = document.createElement('section');
    
    // Business Name
    let h2 = document.createElement('h2');
    h2.textContent = business.name;
    card.appendChild(h2);

    //Business Address
    let address = document.createElement('p');
    address.textContent = business.address;
    card.appendChild(address);

    // Business Phone Number
    let number = document.createElement('p');
    number.textContent = business.number;
    card.appendChild(number);

    // Business website
    let website = document.createElement('p');
    website.textContent = business.website;
    card.appendChild(website);

    // Business image
    let image = document.createElement('img');
    image.setAttribute('src', business.imageurl);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);

    // // Business membership level
    let membership = document.createElement('p');
    membership.textContent = business.membership;
    card.appendChild(membership);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}
