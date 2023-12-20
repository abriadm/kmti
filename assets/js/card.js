const listDivisiHTML = document.querySelector(".listDivisi");

const listDivisi = [
    {
        link: '/pages/ph.html',
        h1: 'PH',
        h4: 'Pengurus Harian'
    },
    {
        link: '/pages/iptek.html',
        h1: 'IPTEK',
        h4: 'Ilmu Pengetahuan dan Teknologi'
    },
    {
        link: '/pages/humas.html',
        h1: 'HUMAS',
        h4: 'Hubungan Masyarakat'
    },
    {
        link: '/pages/kastrad.html',
        h1: 'KASTRAD',
        h4: 'Kajian dan Strategi'
    },
    {
        link: '/pages/kwu.html',
        h1: 'KWU',
        h4: 'Kewirausahaan'
    },
    {
        link: '/pages/medpro.html',
        h1: 'MEDPRO',
        h4: 'Media Propaganda'
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
            <a href="${divisi.link}"><h4>${divisi.h4}</h4></a>
            `;
            listDivisiHTML.appendChild(newDivisi);
        });
    }
}

addDatatoHTML();