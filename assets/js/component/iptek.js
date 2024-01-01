// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/iptek-images/iptek-bg.png";
    addImg.alt = "Background PH";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "Study More",
        p: "Study More adalah kegiatan yang dilaksanakan untuk mahasiswa yang mengalami kesulitan materi pembelajaran",
    },
    {
        h1: "IT Research",
        p: "IT Research merupakan kegiatan yang berfokus untuk membahas persoalan di bidang TI, lalu hasil dari diskusi akan diunggah ke website KMTI"
    },
    {
        h1: "Golden Card",
        p: "Golden Card adalah wadah untuk memberikan kesempatan bagi mahasiwa Golden Card adalah wadah untuk memberikan kesempatan bagi mahasiwa minat dan bakat",
    },
    {
        h1: "Seminar",
        p: "Seminar bertujuan untuk menyediakan wadah bagi mahasiswa, agar bisa menambah pengetahuan mengenai  IT maupun yang di luar IT"
    },
    {
        h1: "Web Development",
        p: "Web Dev adalah proker yang bertujuan untuk membangun,mengembangkan, serta mengelola laman website KMTI."
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
        img: "../assets/images/iptek-images/gw.png",
        h3: "Abriansyah Adam",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/iptek-images/nadia.png",
        h3: "Nadia Cahya Dewi",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/iptek-images/anggi.png",
        h3: "Anggi Puspita",
        h6: "PJ Study More"
    },
    {
        img: "../assets/images/iptek-images/tama.png",
        h3: "Atama Cahya EL-firdausy",
        h6: "PJ IT Research"
    },
    {
        img: "../assets/images/iptek-images/abrar.png",
        h3: "Abrar Imam Satria",
        h6: "PJ Golden Card"
    },
    {
        img: "../assets/images/iptek-images/rendy.png",
        h3: "Muhammad Rendy ",
        h6: "PJ Seminar"
    },
    {
        img: "../assets/images/iptek-images/huda.png",
        h3: "Huda",
        h6: "PJ Web development"
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

