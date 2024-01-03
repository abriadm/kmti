const listDivisiHTML = document.querySelector(".listDivisi");

const listDivisi = [
    {
        img: "/assets/images/ph-images/bg-ph.png",
        link: '/Pages/ph.html',
        h1: 'PH'
       
    },
    {
        img: "/assets/images/iptek-images/iptek-bg.png",
        link: '/Pages/iptek.html',
        h1: 'IPTEK'
    
    },
    {
        img: "/assets/images/humas-images/bg-humas.png",
        link: '/Pages/humas.html',
        h1: 'HUMAS'
        
    },
    {
        img: "/assets/images/kastrad-images/bg-kastrad.png",
        link: '/Pages/kastrad.html',
        h1: 'KASTRAD'

    },
    {
        img: "/assets/images/kwu-images/bg-kwu.png",
        link: '/Pages/kwu.html',
        h1: 'KWU'
       
    },

    {
        img: "/assets/images/kh-images/bg-kh.png",
        link: '/Pages/kh.html',
        h1: 'KH'
       
    },

    {
        img: "/assets/images/sbo-images/bg-sbo.png",
        link: '/Pages/SBO.html',
        h1: 'SBO'
       
    },

    {
        img: "/assets/images/medpro-images/bg-medpro.png",
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
            <img src="${divisi.img}" alt="Foto anggota" />
            <a href="${divisi.link}"><h1>${divisi.h1}</h1></a>
            `;
            listDivisiHTML.appendChild(newDivisi);
        });
    }
}

addDatatoHTML();