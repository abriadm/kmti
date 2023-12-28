// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/humas-images/aida.png",
        alt: "Aida",
        h2: "Anggota",
        h4: "Aida"
    },
    {
        img: "/assets/images/humas-images/andini.png",
        alt: "Andini",
        h2: "Anggota",
        h4: "Andini"
    },
    {
        img: "/assets/images/humas-images/harun.png",
        alt: "Harun",
        h2: "Anggota",
        h4: "Harun"
    },
    {
        img: "/assets/images/humas-images/ikram.png",
        alt: "Ikram",
        h2: "Anggota",
        h4: "Ikram"
    },
    {
        img: "/assets/images/humas-images/nauval.png",
        alt: "Nauval",
        h2: "Anggota",
        h4: "Nauval"
    },
    {
        img: "/assets/images/humas-images/nila.png",
        alt: "Nila",
        h2: "Anggota",
        h4: "Nila"
    },
    {
        img: "/assets/images/humas-images/radita.png",
        alt: "Radita",
        h2: "Sekretaris",
        h4: "Radita"
    }
];

const addDatatoHTML = () => {
    listAnggotaHTML.innerHTML = "";
    if (listAnggota.length > 0) {
        listAnggota.forEach(anggota => {
            const newAnggota = document.createElement("div");
            newAnggota.classList.add("itemAnggota");
            newAnggota.innerHTML = `
            <img src="${anggota.img}" alt="${anggota.alt}" class="img-anggota"/>
            <h2>${anggota.h2}</h2>
            <h4>${anggota.h4}</h4>
            `;
            listAnggotaHTML.appendChild(newAnggota);
        });
    }
}

addDatatoHTML();

// Proker
const listProkerHTML = document.querySelector(".listProker");

// Nambah Data proker disini!!
const listProker = [
    // {
    //     h1: "Rapat Kerja",
    //     p: "deskripsi proker"
    // },
    // {
    //     h1: "Rapat Besar",
    //     p: "deskripsi proker"
    // },
    // {
    //     h1: "IT Specta",
    //     p: "deskripsi proker"
    // },
    // {
    //     h1: "Kongres Ketua IT Specta",
    //     p: "deskripsi proker"
    // },
    // {
    //     h1: "Sinan",
    //     p: "deskripsi proker"
    // }

];

const addListProker = () => {
    listProkerHTML.innerHTML = "";
    if (listProker.length > 0) {
        listProker.forEach(proker => {
            const newProker = document.createElement("div");
            newProker.classList.add("itemProker");
            newProker.innerHTML = `
            <h3 class="header-proker">${proker.h1}</h3>
            <p>${proker.p}</p>
            `;
            listProkerHTML.appendChild(newProker);
        });
    }
}

addListProker();