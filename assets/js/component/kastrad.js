// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/kastrad-images/bg-kastrad.png";
    addImg.alt = "Background Kastrad";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "Diskusi Publik",
        p: "Diskusi publik adalah salah satu program kerja Divisi Kastrad yang bertujuan sebagai wadah diskusi mahasiswa baik mahasiswa TI maupun masyarakat umum untuk membahas isu yang sedang terjadi.TIMELINE : Diskusi publik akan dilaksanakan minimal 3 bulan sekali"
    },
    {
        h1: "Kotak Saran",
        p: "Kotak Saran salah satu program kerja Divisi Kastrad yang bertujuan sebagai wadah untuk memberi saran masukan, dan menyampaikan keluhan kepada KMTI dan juga prodi secara online melalui QR Code dan link yang akan tertuju ke Google Form yang telah disediakan TIMELINE : Kotak saran akan disebar 3 minggu sekali dan akan dicek seminggu setelah dikirim."
    },
    {
        h1: "Kajian internal",
        p: "Kajian Internal merupakan salah satu program kerja Divisi Kastrad untuk mengkaji isu-isu baik isu nasional, isu yang ada masyarakat umum, isu di lingkungan kampus maupun isu yang ada di Prodi TI yang pesertanya merupakan internal KMTI baik pengurus maupun OJT"
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
        img: "../assets/images/kastrad-images/faqod.png",
        h3: "Faqod Aqomadin",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/kastrad-images/zharfan.png",
        h3: "Muhammad Zharfan ",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/kastrad-images/fauzan.png",
        h3: "Fauzan Althaf Rianto",
        h6: "PJ Kajian Internal"
    },
    {
        img: "../assets/images/kastrad-images/nabigh.png",
        h3: "Mohd. Nabigh Rifqi",
        h6: "PJ Kajian Internal"
    },
    {
        img: "../assets/images/kastrad-images/luna.png",
        h3: "laluna riska",
        h6: "PJ Kotak Saran"
    },
    {
        img: "../assets/images/kastrad-images/hanif.png",
        h3: "Dzaky Hanif Annafi",
        h6: "PJ Diskusi Publik"
    },
    {
        img: "../assets/images/kastrad-images/dhea.png",
        h3: "dhea Kania Putry",
        h6: "PJ Kotak saran"
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

