// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/kwu-images/adit.png",
        alt: "Adit",
        h2: "Anggota",
        h4: "Adit"
    },
    {
        img: "/assets/images/kwu-images/alfandi.png",
        alt: "Alfandi",
        h2: "Anggota",
        h4: "Alfandi"
    },
    {
        img: "/assets/images/kwu-images/dewo.png",
        alt: "Dewo",
        h2: "Ketua Divisi",
        h4: "Dewo"
    },
    {
        img: "/assets/images/kwu-images/fahri.png",
        alt: "Fakhri",
        h2: "Sekretaris",
        h4: "Fakhri"
    },
    {
        img: "/assets/images/kwu-images/farras.png",
        alt: "Farras",
        h2: "Anggota",
        h4: "Farras"
    },
    {
        img: "/assets/images/kwu-images/hilal.png",
        alt: "Hilal",
        h2: "Anggota",
        h4: "Hilal"
    },
    {
        img: "/assets/images/kwu-images/rauda.png",
        alt: "Rauda",
        h2: "Anggota",
        h4: "Rauda"
    },
    {
        img: "/assets/images/kwu-images/zahro.png",
        alt: "Zahro",
        h2: "Anggota",
        h4: "Zahro"
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