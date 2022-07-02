const requestURL = 'js/directory.json';

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();

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


    // Business website
    let website = document.createElement('p');
    website.textContent = business.website;
    card.appendChild(website);

    // Business image
    let image = document.createElement('img');
    image.setAttribute('src', business.imageurl);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);

    // append the first three busnesses to div class spotlight_1, spotlight_2, spotlight_3
    if (business.spotlight === '1') {
        document.querySelector('div.spotlight_1').appendChild(card);
    }
    if (business.spotlight === '2') {
        document.querySelector('div.spotlight_2').appendChild(card);
    }
    if (business.spotlight === '3') {
        document.querySelector('div.spotlight_3').appendChild(card);
    }
}
