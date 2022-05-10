const CONFIG = {
    spreadsheetId: '1El70IicGUkyno-YkthLuDpb2GSBgEujFmVMZvk2WeRE',
    spreadsheetName: 'Blad1'
}

async function getData() {
    let res = await fetch(`https://opensheet.elk.sh/${CONFIG.spreadsheetId}/${CONFIG.spreadsheetName}`)
    return await res.json();
}

function gegevensOphalen(data) {
    let main = document.querySelector('main');

    console.log(data);

    data.forEach(item => {
        let container = document.createElement('article');

        let name = document.createElement('h2');
        name.textContent = item['Name'];

        let category = document.createElement('h3');
        category.textContent = item['Category'];

		let rating = document.createElement('p');
        rating.textContent = item['Rating'];

        container.appendChild(name);
        container.appendChild(category);
		container.appendChild(rating);

        main.appendChild(container);
    })
}

if (document.querySelector('main')) {
    getData()
        .then(data => {
            gegevensOphalen(data);
        })
}