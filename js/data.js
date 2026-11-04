/* =====================================================
   DATA.JS - SATU-SATUNYA FILE YANG PERLU ANDA EDIT
   Semua teks, foto, CV, skill, proyek ada di sini.
   ===================================================== */
const DATA = {
  // ---------- PROFIL ----------
  profile: {
    name: "Hilman Amarudin",
    // Teks yang berganti-ganti di Hero (tambah/hapus bebas)
    roles: ["Informatics Engineering Student", "IT Support", "Web Developer", "Data Enthusiast"],
    heroDesc: "Mahasiswa Teknik Informatika Universitas Perjuangan Indonesia yang berfokus pada web development dan data.",
    location: "Tasikmalaya, Jawa Barat, Indonesia",
    photo: "portfolio-hilman/portfolio/assets/images/profile.jpg",              // ganti foto: taruh file dengan nama ini
    cv: "portfolio-hilman/portfolio/assets/documents/CV_ATS_HILMAN AMARUDIN.pdf",   // ganti CV: taruh file dengan nama ini
    about: "Saya merupakan mahasiswa Teknik Informatika Universitas Perjuangan Indonesia yang memiliki minat dan kompetensi dalam pengembangan perangkat lunak, sistem informasi, analisis data, dan teknologi berbasis web. Memiliki pengalaman mengembangkan website untuk Kelurahan Setiajaya serta mengelola kegiatan live streaming sebagai Livestream Manager. Selain itu, saat menempuh pendidikan SMK jurusan Teknik Pemesinan, saya pernah mengikuti Praktik Kerja Lapangan (PKL) di Bengkel Kondang Jaya Teknik selama tiga bulan, dengan memperoleh pengalaman langsung di lingkungan kerja bengkel dan praktik bidang pemesinan. Saya juga memiliki pengalaman kerja di industri Food & Beverage sebagai Barista, Waiter, dan Helper Kitchen yang mengasah kemampuan komunikasi, kerja sama tim, pelayanan, ketelitian, manajemen waktu, serta kemampuan bekerja di bawah tekanan. Saya merupakan pribadi yang cepat belajar, bertanggung jawab, mudah beradaptasi, dan siap menerapkan kemampuan teknis maupun profesional untuk memberikan kontribusi positif di dunia kerja."
  },

  // ---------- KONTAK (ganti data contoh) ----------
  contact: {
    email: "hilmanamarudin344@gmail.com",
    whatsapp: "https://wa.me/6281223739314",                       // format: 62 + nomor tanpa angka 0 di depan
    instagram: "https://www.instagram.com/hilmanamar_/",
    linkedin: "https://www.linkedin.com/in/hilman-amarudin-b75b93289/",
    github: "https://github.com/username"
  },

  // ---------- PENDIDIKAN ----------
  education: [
    { school: "Universitas Perjuangan Indonesia", major: "Teknik Informatika", year: "2022 - 2026" },
    { school: "SMKN 2 Kota Tasikmalaya", major: "Teknik Pemesinan", year: "2019 - 2022" },
    { school: "MTSN 1 Kota Tasikmalaya", year: "2016 - 2019" },
    { school: "SDN 2 Siluman", year: "2010 - 2016" }
  ],

  // ---------- SKILLS (hapus/ganti item yang belum dikuasai) ----------
  skills: {
    "Technical Skills": ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Basic Programming", "Database Management"],
    "IT Skills": ["IT Support", "Computer Troubleshooting", "Software Installation", "Network Troubleshooting", "Microsoft Office"],
    "Data Skills": ["Data Entry", "Data Processing", "Data Analysis"],
    "Soft Skills": ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management", "Public Speaking"]
  },

  // ---------- PENGALAMAN ----------
  experience: [
    { role: "IT Support", place: "Kantor Kelurahan Setiajaya", period: "April 2025 - September 2025",
      tasks: ["Selama menjalani Kerja Praktik di Kelurahan Setiajaya sebagai IT Support, saya membantu pengelolaan data dan administrasi kelurahan serta mendukung kebutuhan teknologi informasi. Saya juga bertanggung jawab dalam pembuatan website Sistem Informasi Permohonan Surat Berbasis Web untuk memudahkan masyarakat mendapatkan informasi dan mengajukan permohonan surat secara online. Selain itu, saya membantu memastikan pengelolaan informasi dan layanan administrasi berjalan dengan baik."] },
    { role: "Livestream Manager", place: "Rumah Sendiri", period: "November 2024 - Februari 2026",
      tasks: ["Mengelola dan mempersiapkan kegiatan live streaming di Shopee untuk mempromosikan produk, mulai dari menyiapkan produk, menyampaikan informasi dan keunggulan produk, mengatur jalannya siaran, hingga berinteraksi dengan penonton untuk meningkatkan ketertarikan dan penjualan produk."] },
    { role: "Asisten Bengkel", place: "Kondang Jaya Teknik", period: "Juli 2021 - September 2021",
       tasks: ["Saya membantu mekanik dalam proses perawatan dan perbaikan mesin, menyiapkan peralatan kerja, serta menjaga kebersihan dan kerapian area bengkel. Saya juga membantu menyiapkan komponen yang dibutuhkan dan memastikan pekerjaan dilakukan dengan rapi sesuai arahan mekanik."] }
  ],

  // ---------- PROYEK (salin blok { ... } untuk menambah, hapus untuk menghapus) ----------
  projects: [
    { name: " SISTEM  INFORMASI PERMOHONAN SURAT DI KELURAHAN SETIAJAYA BERBASIS WEB",
      image: "assets/images/proyek-surat.jpg", 
      description: "Sebuah sistem informasi berbasis web yang dikembangkan untuk membantu meningkatkan pelayanan administrasi surat-menyurat di Kelurahan Setiajaya. Sistem ini dirancang untuk memudahkan masyarakat dalam mengajukan permohonan surat pengantar secara online tanpa harus datang langsung ke kantor kelurahan. Sistem ini juga dilengkapi dengan halaman admin yang digunakan oleh petugas kelurahan untuk mengelola data permohonan, Selain itu, tersedia fitur pengelolaan informasi kelurahan seperti profil, berita, layanan, dan informasi lainnya. Dengan adanya sistem ini, diharapkan proses pelayanan administrasi menjadi lebih efektif, terorganisir, dan memudahkan masyarakat dalam memperoleh layanan surat-menyurat.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], link: "" },
    { name: "Proyek Internet of Things (IoT)", image: "assets/images/proyek-iot.jpg",
      description: "Merupakan proyek Internet of Things (IoT) yang dibuat untuk membantu mempermudah aktivitas menjemur pakaian dengan memanfaatkan sensor pendeteksi air hujan. Dengan adanya sistem ini, jemuran dapat diberikan perlindungan agar pakaian tidak terkena air hujan, sehingga membantu mengurangi risiko pakaian basah saat ditinggalkan.", 
      tech: ["Internet of Things (IoT)", "sensor hujan (Rain Sensor)", "mikrokontroler"], link: "" },
    { name: "Proyek Data Analysis", image: "assets/images/proyek-data.jpg",
      description: "Merupakan proyek penelitian skripsi yang berfokus pada penerapan dan perbandingan algoritma Machine Learning, yaitu Random Forest dan Gradient Boosting, untuk memprediksi penjualan produk melalui aktivitas live streaming pada Shopee Affiliate. Penelitian ini diharapkan dapat memberikan gambaran mengenai faktor-faktor yang berpengaruh terhadap penjualan serta membantu memperkirakan potensi penjualan produk melalui live streaming.", 
      tech: ["Pyhton", "Google Colab", "Machine Learning", "Random Forest Regressor", "Gradient Boosting Regressor", "Pandas dan Scikit-learn", "Evaluasi model: MAE, RMSE, dan R²"], link: "" }
  ],

  // ---------- SERTIFIKAT ----------
  certificates: [
    { name: "Tel U SAPA Universitas Perjuangan Tasikmalaya: Cyber Security Di Era Digital", issuer: "Telkom University", year: "2023", image: "assets/certificates/Sertifikat Tel U.png" },
    { name: "Sekolah Pasar Modal", issuer: "IDX", year: "2024", image: "assets/certificates/Sertifikat IDX.jpeg" },
    {name: "Praktek Kerja Lapangan", issuer: "SMKN 2 Kota Tasikmalaya", year: "2021", image: "assets/certificates/Sertifikat PKL.jpeg"},
    {name: "TOEFL", issuer: "Univeristas Perjuangan", year: "2026", image: "assets/certificates/sertifikat-toefl.jpeg"}
  ]
};
