// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/kastrad-images/dhea.png",
        alt: "Dhea",
        h2: "Anggota",
        h4: "Dhea"
    },
    {
        img: "/assets/images/kastrad-images/faqod.png",
        alt: "Faqod",
        h2: "Ketua Divisi",
        h4: "Faqod"
    },
    {
        img: "/assets/images/kastrad-images/fauzan.png",
        alt: "Fauzan",
        h2: "Anggota",
        h4: "Fauzan"
    },
    {
        img: "/assets/images/kastrad-images/hanif.png",
        alt: "Hanif",
        h2: "Anggota",
        h4: "Hanif"
    },
    {
        img: "/assets/images/kastrad-images/luna.png",
        alt: "Luna",
        h2: "Anggota",
        h4: "Luna"
    },
    {
        img: "/assets/images/kastrad-images/nabigh.png",
        alt: "Nabigh",
        h2: "Anggota",
        h4: "Nabigh"
    },
    {
        img: "/assets/images/kastrad-images/zharfan.png",
        alt: "Zharfan",
        h2: "Sekretaris",
        h4: "Zharfan"
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