const listDivisiHTML = document.querySelector(".listDivisi");

const listDivisi = [
    {
        link: '/pages/ph.html',
        h1: 'PH'
       
    },
    {
        link: '/pages/iptek.html',
        h1: 'IPTEK'
    
    },
    {
        link: '/pages/humas.html',
        h1: 'HUMAS'
        
    },
    {
        link: '/pages/kastrad.html',
        h1: 'KASTRAD'

    },
    {
        link: '/pages/kwu.html',
        h1: 'KWU'
       
    },
    {
        link: '/pages/medpro.html',
        h1: 'MEDPRO'
        
    }
];

// This is Logic by Cogil

const addDatatoHTML = () => {
    listDivisiHTML.innerHTML = '';
    if (listDivisi.length > 0) {
        listDivisi.forEach(divisi => {
            const newDivisi = document.createElement("div");
            newDivisi.classList.add('itemDivisi');
            newDivisi.innerHTML = `
            <a href="${divisi.link}"><h1>${divisi.h1}</h1></a>
            `;
            listDivisiHTML.appendChild(newDivisi);
        });
    }
}

addDatatoHTML();