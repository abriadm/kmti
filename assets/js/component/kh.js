// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/kh-images/bg-kh.png";
    addImg.alt = "Background KH";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "kajian islam",
        p: "Menambah ilmu serta wawasan, Menjalin silaturahmi antar sesama, dan Me-recharge keimanan agar kembali semangat"
    },
    {
        h1: "bakti sosial & galang dana",
        p: "mengajak kebaikan dengan berbagi kepada yang membutuhkan"
    },
    {
        h1: "Halaqah al-Qahfi",
        p: "Meningkatkan kebersamaan antar anggota KMTI dengan mengisi hari jumat dengan membaca al kahfi"
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
        img: "../assets/images/kh-images/fahrizal.png",
        h3: "Farizal kusuma yudha",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/kh-images/ulfah.png",
        h3: "Muhajirah ulfah",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/kh-images/elwin.png",
        h3: "elwin",
        h6: "PJ Kajian Islam"
    },
    {
        img: "../assets/images/kh-images/sakti.png",
        h3: "sakti",
        h6: "PJ Kajian Islam"
    },
    {
        img: "../assets/images/kh-images/ridwan.png",
        h3: "ridwan",
        h6: "PJ Baksos & galang dana"
    },
    {
        img: "../assets/images/kh-images/agil.png",
        h3: "agil",
        h6: "PJ Baksos & galang dana"
    },
    {
        img: "../assets/images/kh-images/andra.png",
        h3: "andra",
        h6: "PJ Baksos & galang dana"
    },
    {
        img: "../assets/images/kh-images/rangga.png",
        h3: "rangga",
        h6: "PJ Halaqah Al-Kahfi"
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

