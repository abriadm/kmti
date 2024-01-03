const generateImg = () => {
    const banner = document.querySelector(".banner");
    const addImg = document.createElement("img");
    addImg.src = "../assets/images/humas-images/bg-humas.png";
    addImg.alt = "Background humas";
    banner.appendChild(addImg);
}

generateImg();


// Anggota Divisi

const listAnggotaHTML = document.querySelector(".card-anggota");

const listAnggota = [
    {
        img: "../assets/images/humas-images/nabil.png",
        h3: "Nabil Makarim",
        h6: "Ketua Divisi"
    },
    {
        img: "../assets/images/humas-images/radita.png",
        h3: "Radita Nurhasna",
        h6: "Sekretaris Divisi"
    },
    {
        img: "../assets/images/humas-images/aida.png",
        h3: "Aida Jihan Fitriyah",
        h6: "PJ Public Hearing"
    },
    {
        img: "../assets/images/humas-images/andini.png",
        h3: "Andini Septi Andri",
        h6: "PJ Public Hearing"
    },
    {
        img: "../assets/images/humas-images/harun.png",
        h3: "andi harun",
        h6: "PJ Graduation Ceremony"
    },
    {
        img: "../assets/images/humas-images/ikram.png",
        h3: "Muhammad ikram riza",
        h6: "PJ Kunjungan Eksternal"
    },
    {
        img: "../assets/images/humas-images/nauval.png",
        h3: "Nauval Achid Rosady",
        h6: "PJ Kunjungan Eksternal"
    },
    {
        img: "../assets/images/humas-images/nila.png",
        h3: "Nila Citra Ayu",
        h6: "PJ Kunjungan Internal"
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

// Proker
const listProkerHTML = document.querySelector(".card-proker");

// Nambah Data proker disini!!
const listProker = [
    {
        h1: "Public Hearing",
        p: "Public Hearing adalah salah satu program kerja humas yang bertujuan untuk menampung keluh kesah,kritik dan harapan dari mahasiswa TI guna menjadi  bahan evaluasi setiap semester"
    },
    {
        h1: "Kunjungan Internal",
        p: " Kunjungan Internal adalah salah satu program kerja humasyang bertujuan melakukan study banding mengenai sistem serta struktur organisasi dari setiap lembaga yang di tuju ,sasaran kegiatan ini adalah lembaga dalam kampus UMY"
    },
    {
        h1: "Kunjungan Eksternal",
        p: "Kunjungan Eksternal adalah salah satu program kerja HUMAS yang bertujuan melakukan study banding mengenai sistem serta struktur organisasi dari setiap lembaga yang dituju. Sasaran kegiatan ini adalah Lembaga diluar kampus UMY"
    },
    {
        h1: "Graduation Ceremony",
        p: "Graduation Ceremony adalah salah satu program kerja HUMAS yang betujuan menyambut dan memberikan penghormatan kepada para wisudawan yang telah berperan besar untuk TI."
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