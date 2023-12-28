const listDivisiHTML = document.querySelector(".listDivisi");

const listDivisi = [
    {
        link: '/Pages/ph.html',
        h1: 'PH'
       
    },
    {
        link: '/Pages/iptek.html',
        h1: 'IPTEK'
    
    },
    {
        link: '/Pages/humas.html',
        h1: 'HUMAS'
        
    },
    {
        link: '/Pages/kastrad.html',
        h1: 'KASTRAD'

    },
    {
        link: '/Pages/kwu.html',
        h1: 'KWU'
       
    },

    {
        link: '/Pages/kh.html',
        h1: 'KH'
       
    },

    {
        link: '/Pages/SBO.html',
        h1: 'SBO'
       
    },

    {
        link: '/Pages/medpro.html',
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


// this is logic by si tampan
document.getElementById('contactUsBtn').addEventListener('click', function() {
    redirectToContactUs();
});

function redirectToContactUs() {
    window.location.href = '/Pages/ContactUs.html';
}