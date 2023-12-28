// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/medpro-images/alvien.png",
        alt: "Alvien",
        h2: "Anggota",
        h4: "Alvien"
    },
    {
        img: "/assets/images/medpro-images/attar.png",
        alt: "Attar",
        h2: "Anggota",
        h4: "Attar"
    },
    {
        img: "/assets/images/medpro-images/ghani.png",
        alt: "Ghani",
        h2: "Ketua Divisi",
        h4: "Ghani"
    },
    {
        img: "/assets/images/medpro-images/hariz.png",
        alt: "Hariz",
        h2: "Anggota",
        h4: "Hariz"
    },
    {
        img: "/assets/images/medpro-images/hikmah.png",
        alt: "Hikmah",
        h2: "Anggota",
        h4: "Hikmah"
    },
    {
        img: "/assets/images/medpro-images/intan.png",
        alt: "Intan",
        h2: "Sekretaris",
        h4: "Intan"
    },
    {
        img: "/assets/images/medpro-images/yogi.png",
        alt: "Yogi",
        h2: "Anggota",
        h4: "Yogi"
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