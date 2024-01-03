// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/kwu-images/bg-kwu.png";
    addImg.alt = "Background KWU";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "S2M (Seminar,Market,Merchandise)",
        p: "S2M merupakan satu satunya program kerja pada divisi kwu yang langsung menggabungkan 3 kegiatan utama yaitu seminar,market,dan merchandise. Selain itu dari setiap kegiatan terdapat beberapa penanggung jawab seperti Pj penjualan,Pj pembelian,Pj Vendor,Pj Seminar,Pj Design"
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
        img: "../assets/images/kwu-images/dewo.png",
        h3: "endiarto dewobroto",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/kwu-images/fahri.png",
        h3: "M Fahri Hidayat",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/kwu-images/farras.png",
        h3: "M farras",
        h6: ""
    },
    {
        img: "../assets/images/kwu-images/zahro.png",
        h3: "Zahrotuul Jannah",
        h6: ""
    },
    {
        img: "../assets/images/kwu-images/adit.png",
        h3: "Aditya Hari",
        h6: ""
    },
    {
        img: "../assets/images/kwu-images/alfandi.png",
        h3: "Alfandi",
        h6: ""
    },
    {
        img: "../assets/images/kwu-images/rauda.png",
        h3: "Raudatul Jannah",
        h6: ""
    },
    {
        img: "../assets/images/kwu-images/hilal.png",
        h3: "hilal",
        h6: ""
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

