// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/iptek-images/abrar.png",
        alt: "Abrar",
        h2: "Golden Cards",
        h4: "Abrar"
    },
    {
        img: "/assets/images/iptek-images/anggi.png",
        alt: "Anggi",
        h2: "Study More",
        h4: "Anggi"
    },
    {
        img: "/assets/images/iptek-images/gw.png",
        alt: "Abriansyah Adam",
        h2: "Ketua Divisi",
        h4: "Abriansyah Adam"
    },
    {
        img: "/assets/images/iptek-images/huda.png",
        alt: "Huda",
        h2: "Web Developer",
        h4: "Huda"
    },
    {
        img: "/assets/images/iptek-images/nadia.png",
        alt: "Nadia",
        h2: "Sekretaris",
        h4: "Nadia"
    },
    {
        img: "/assets/images/iptek-images/rendy.png",
        alt: "Rendy",
        h2: "Seminar",
        h4: "Rendy"
    },
    {
        img: "/assets/images/iptek-images/tama.png",
        alt: "Tama",
        h2: "IT Research",
        h4: "Tama"
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