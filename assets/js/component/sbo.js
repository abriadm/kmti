// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/sbo-images/bg-sbo.png";
    addImg.alt = "Background sbo";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "Futsal",
        p: "latihan sebulan sekali,iuran 15k"
    },
    {
        h1: "voli",
        p: "latihan sebulan sekali,iuran 10k"
    }, 
    {
        h1: "basket",
        p: "latihan sebulan sekali,iuran 15k"
    }, 
    {
        h1: "E-Sport",
        p: "Sub-proker: Mobile Legends & Valorant sebulan 2-3kali"
    }, 
    {
        h1: "Tari",
        p: "latihan sebulan sekali,iuran 10k"
    }, 
    {
        h1: "Musik",
        p: "latihan sebulan sekali,iuran 15k"
    }, 
    {
        h1: "Badminton",
        p: "latihan sebulan sekali,iuran 10k"
    },                        
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
        img: "../assets/images/sbo-images/Dzaky.png",
        h3: "Dzaky Nauval",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/sbo-images/nadhira.png",
        h3: "Nadhira",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/sbo-images/rafi.png",
        h3: "Rafi Alif",
        h6: "PJ Futsal"
    },
    {
        img: "../assets/images/sbo-images/zidan.png",
        h3: "Zidan Arigha",
        h6: "PJ Futsal"
    },
    {
        img: "../assets/images/sbo-images/wahyu.png",
        h3: "Mohamad Wahyu Rizki Adnan",
        h6: "PJ Voli & Esports"
    },
    {
        img: "../assets/images/sbo-images/iqbal.png",
        h3: "Iqbal",
        h6: "PJ Voli & Badminton"
    },
    {
        img: "../assets/images/sbo-images/dhafa.png",
        h3: "Muhammad Dhafa",
        h6: "PJ Basket"
    },
    {
        img: "../assets/images/sbo-images/dewi.png",
        h3: "Dewi Khulbi",
        h6: "PJ tari"
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

