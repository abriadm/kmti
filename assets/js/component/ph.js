// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "Rapat Kerja",
        p: "Rapat setiap bulan",
    },
    {
        h1: "Triwulan",
        p: "Rapat setiap 3 bulan sekali dan LPJ",
    },
    {
        h1: "IT Specta",
        p: "Event olahraga mahasiswa TI UMY",
    }
];

const addListProker = () => {
    listProkerHTML.innerHTML = "";
    if (listProker.length > 0) {
        listProker.forEach(proker => {
            const newProker = document.createElement("div");
            newProker.classList.add("itemProker");
            newProker.innerHTML = `
            <h1>${proker.h1}</h1>
            <p>${proker.p}</p>
            `;
            listProkerHTML.appendChild(newProker);
        });
    } else {
        listProkerHTML.innerHTML = "No content found!!";
    }
}

addListProker();

// Anggota Divisi

const listAnggotaHTML = document.querySelector(".card-anggota");

const listAnggota = [
    {
        img: "../assets/images/ph-images/salman.png",
        h3: "Salman Firdaus",
        h6: "Ketua Himpunan KMTI"
    },
    {
        img: "../assets/images/ph-images/amel.png",
        h3: "Amel",
        h6: "Sekretaris Utama"
    },
    {
        img: "../assets/images/ph-images/mei.png",
        h3: "Mei Tri Cahyani",
        h6: "Sekretaris Jendral"
    },
    {
        img: "../assets/images/ph-images/caca.png",
        h3: "Dhiya Ulhaq",
        h6: "Bendahara"
    },
    {
        img: "../assets/images/ph-images/yoga.png",
        h3: "Yoga Prasetya",
        h6: "Wakil Ketua KMTI"
    }
];

const addListAnggota = () => {
    listAnggotaHTML.innerHTML = "";
    if (listAnggota.length > 0) {
        listAnggota.forEach(anggota => {
            const newAnggota = document.createElement("div");
            newAnggota.classList.add("itemAnggota");
            newAnggota.innerHTML = `
            <img src="${anggota.img}" alt="Foto anggota" />
            <h3>${anggota.h3}</h3>
            <h6>${anggota.h6}</h6>
            `;
            listAnggotaHTML.appendChild(newAnggota);
        });
    }
}

addListAnggota();

// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/ph-images/bg-ph.png";
    addImg.alt = "Background PH";
    banner.appendChild(addImg);
}

generateImg();