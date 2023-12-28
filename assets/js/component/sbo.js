// Anggota Divisi
const listAnggotaHTML = document.querySelector(".listAnggota");

// Nambah Data anggota disini!!!
const listAnggota = [
    {
        img: "/assets/images/sbo-images/dewi.png",
        alt: "Dewi",
        h2: "Anggota",
        h4: "Dewi"
    },
    {
        img: "/assets/images/sbo-images/dhafa.png",
        alt: "Dhafa",
        h2: "Anggota",
        h4: "Dhafa"
    },
    {
        img: "/assets/images/sbo-images/dzaky.png",
        alt: "Dzaky",
        h2: "Ketua Divisi",
        h4: "Dzaky"
    },
    {
        img: "/assets/images/sbo-images/iqbal.png",
        alt: "Iqbal",
        h2: "Anggota",
        h4: "Iqbal"
    },
    {
        img: "/assets/images/sbo-images/nadhira.png",
        alt: "Nadhira",
        h2: "Sekretaris",
        h4: "Nadhira"
    },
    {
        img: "/assets/images/sbo-images/rafi.png",
        alt: "Rafi",
        h2: "Anggota",
        h4: "Rafi"
    },
    {
        img: "/assets/images/sbo-images/wahyu.png",
        alt: "Wahyu",
        h2: "Anggota",
        h4: "Wahyu"
    },
    {
        img: "/assets/images/sbo-images/zidan.png",
        alt: "Zidan",
        h2: "Anggota",
        h4: "Zidan"
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