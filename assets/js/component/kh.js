// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/kh-images/agil.png",
        alt: "Agil",
        h2: "Anggota",
        h4: "Agil"
    },
    {
        img: "/assets/images/kh-images/andra.png",
        alt: "Andra",
        h2: "Anggota",
        h4: "Andra"
    },
    {
        img: "/assets/images/kh-images/elwin.png",
        alt: "Elwin",
        h2: "Anggota",
        h4: "Elwin"
    },
    {
        img: "/assets/images/kh-images/fahrizal.png",
        alt: "Fahrizal",
        h2: "Ketua Divisi",
        h4: "Fahrizal"
    },
    {
        img: "/assets/images/kh-images/rangga.png",
        alt: "Rangga",
        h2: "Anggota",
        h4: "Rangga"
    },
    {
        img: "/assets/images/kh-images/ridwan.png",
        alt: "Ridwan",
        h2: "Anggota",
        h4: "Ridwan"
    },
    {
        img: "/assets/images/kh-images/sakti.png",
        alt: "Sakti",
        h2: "Anggota",
        h4: "Sakti"
    },
    {
        img: "/assets/images/kh-images/ulfah.png",
        alt: "Ulfah",
        h2: "Sekretaris",
        h4: "Ulfah"
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