// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/ph-images/salman.png",
        alt: "Salman",
        h2: "Ketua Himpunan",
        h4: "Salman Firdaus"
    },
    {
        img: "/assets/images/ph-images/yoga.png",
        alt: "Yoga",
        h2: "Wakil Himpunan",
        h4: "Yoga Prasetya"
    },
    {
        img: "/assets/images/ph-images/caca.png",
        alt: "Caca",
        h2: "Bendahara",
        h4: "Dhiya Ulhaq"
    },
    {
        img: "/assets/images/ph-images/amel.png",
        alt: "Amel",
        h2: "Infentaris",
        h4: "Amel"
    },
    {
        img: "/assets/images/ph-images/mei.png",
        alt: "Mei",
        h2: "Sekretaris",
        h4: "Mei Tri"
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
    {
        h1: "Rapat Kerja",
        p: "deskripsi proker"
    },
    {
        h1: "Rapat Besar",
        p: "deskripsi proker"
    },
    {
        h1: "IT Specta",
        p: "deskripsi proker"
    },
    {
        h1: "Kongres Ketua IT Specta",
        p: "deskripsi proker"
    },
    {
        h1: "Sinan",
        p: "deskripsi proker"
    }

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