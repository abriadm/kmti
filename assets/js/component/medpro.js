// Banner atau background generator
const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/medpro-images/bg-medpro.png";
    addImg.alt = "Background Medpro";
    banner.appendChild(addImg);
}

generateImg();

// Proker
const listProkerHTML = document.querySelector(".card-proker");

const listProker = [
    {
        h1: "Foto Kepengurusan",
        p: "Foto kepengurusan bertujuan untuk mendokumentasikan foto setiap pengurus KMTI UMY yang akan dipublikasikan di media sosial KMTI UMY"
    },     
    {
        h1: "Monday Is Korsaday",
        p: "Monday is Korsa Day merupakan salah satu program kerja Medpro yang akan dilakukan dengan mengupload di feed dan story sebagai salah satu peringatan Monday is Korsa Day bagi masyarakat Teknologi Informasi untuk menggunakan korsa di hari Senin."
    },
    {
        h1: "Hari Besar",
        p: "Peringatan hari besar merupakan program kerja divisi Medpro dengan tujuan untuk memperingati hari-hari besar penting baik nasional maupun internasional."
    },
    {
        h1: "DidYouKnow & Sekilas IT",
        p: "Did You Know merupakan salah satu program kerja Medpro yang bertujuan untuk memberikan konten-konten umum diluar Teknologi Informasi serta memberikan berita-berita terkini yang bertujuan untuk mengedukasi masyarakat Teknologi Informasi. SekilasTI merupakan salah satu program kerja Medpro yang bertujuan untuk memberikan konten-konten yang berkaitan dengan Teknologi Informasi seperti lifehack serta tips-tips singkat"
    },           
    {
        h1: "Dokumentasi",
        p: "Tim Dokumentasi bertanggung jawab untuk mendokumentasikan setiap event-event yang ada, baik itu dalam lingkup KMTI, prodi, fakultas, hingga universitas dalam bentuk foto maupun video."
    },     
    {
        h1: "Social Media Management",
        p: "Social Media Management bertanggung jawab untuk mengelola setiap akun KMTI UMY mulai dari Instagram Facebook, Twitter, hingga Youtube."
    },
    {
        h1: "Video Editor",
        p: "Tim video editor bertanggung jawab untuk mengedit atau membuat video sesuai dengan permintaan tim content creator."
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
        img: "../assets/images/medpro-images/ghani.png",
        h3: "Ghani",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/medpro-images/intan.png",
        h3: "anggia intan",
        h6: "sekretaris divisi"
    },
    {
        img: "../assets/images/medpro-images/yogi.png",
        h3: "yogi dewanto",
        h6: "PJ MondayIsKorsaDay"
    },
    {
        img: "../assets/images/medpro-images/hikmah.png",
        h3: "nurhikmah",
        h6: "PJ Hari Besar"
    },
    {
        img: "../assets/images/medpro-images/alvien.png",
        h3: "Alvien ridho",
        h6: "PJ Dokumentasi"
    },
    {
        img: "../assets/images/medpro-images/attar.png",
        h3: "Teuku Muhammad Attar Fadhilah",
        h6: "PJ Video Editor"
    },
    {
        img: "../assets/images/medpro-images/hariz.png",
        h3: "Muhammad Hariz Mudrik",
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

