document.addEventListener('DOMContentLoaded', function () {
    const coursesData = [
        // English Courses
        {
            id: 1,
            category: "English",
            name: "IALF Bali",
            program: "Young Learners English (SMP)",
            tags: ["Sangat Direkomendasikan"],
            bestFor: "Pembelajaran Terstruktur & Fasilitas Lengkap",
            hasCertificate: true,
            isForSmp: true,
            isPrivate: false,
            hasNative: true,
            address: "Jalan Raya Sesetan 190, Denpasar",
            whatsapp: "+6282291109448",
            phone: "+62361225243",
            cost: 2350000,
            costText: "Rp 2.350.000 / periode (8 minggu)",
            duration: "8 minggu (24 jam, 16 sesi), 2x seminggu",
            classSize: "Maksimal 14 siswa",
            teacherQuality: "Kombinasi Native & Indonesia, bersertifikasi internasional (CertTESOL/DipTESOL)",
            method: "Dinamis, modern, interaktif, berbasis komunikasi dan proyek.",
            features: "Memiliki Young Learners Centre khusus, terakreditasi BAN, kelas baru setiap 2 minggu, dan menyediakan Free Trial Class.",
            logo: "🎓"
        },
        {
            id: 2,
            category: "English",
            name: "Jolly Roger Education",
            program: "English for Teenagers",
            tags: ["Sangat Direkomendasikan"],
            bestFor: "Bimbingan Privat 1-on-1 & Jaminan Hasil",
            hasCertificate: true,
            isForSmp: true,
            isPrivate: true,
            hasNative: false,
            address: "Graha Merdeka Unit 16-17, Jl. Merdeka, Denpasar",
            whatsapp: "081246497778",
            phone: "Tidak tersedia",
            cost: null, // Cost is varied per package
            costText: "Bervariasi per paket",
            duration: "Fleksibel, tergantung paket (misal: min. 60 sesi)",
            classSize: "1 Tutor 1 Siswa",
            teacherQuality: "Instruktur pilihan (Featured Instructors)",
            method: "PERSONAL ATTENDING 4F METHODE (Fokus, Waktu Fleksibel, Program Fleksibel, Free Study).",
            features: "Jaminan 3G (Pasti Bisa, Ulang Tanpa Biaya, Uang Kembali). Materi disesuaikan dengan gaya hidup remaja.",
            logo: "👤"
        },
        {
            id: 3,
            category: "English",
            name: "UNMAS Denpasar",
            program: "U-Dance Kids-Teens",
            tags: ["Perlu Konfirmasi"],
            bestFor: "Pilihan Fleksibel (Online/Offline)",
            hasCertificate: false,
            isForSmp: true,
            isPrivate: false,
            hasNative: false,
            address: "Jln. Kamboja No.11 A & Jln. Soka No. 47, Denpasar",
            whatsapp: "(+62) 83114599889 (Bukan kontak langsung program)",
            phone: "(0361) 227019",
            cost: null, // Not mentioned
            costText: "Tidak disebutkan",
            duration: "8 pertemuan",
            classSize: "Tidak disebutkan",
            teacherQuality: "Tidak disebutkan",
            method: "Online atau Offline.",
            features: "Perlu konfirmasi langsung mengenai ketersediaan sertifikat untuk program Kids-Teens. Nomor WhatsApp yang tertera adalah untuk program lain.",
            logo: "🏛️"
        },
        {
            id: 4,
            category: "English",
            name: "English Today Bali",
            program: "Private / Online English Course",
            tags: ["Perlu Konfirmasi"],
            bestFor: "Jadwal Fleksibel & Guru Profesional",
            hasCertificate: true,
            isForSmp: false, // Not explicitly for SMP
            isPrivate: true,
            hasNative: true,
            address: "Jl. ByPass Ngurah Rai No. 21A, Lantai 2 Benoa Square, Kuta",
            whatsapp: "+62818888887",
            phone: "(0361) 2003267",
            cost: 1000000, // Starting from
            costText: "Mulai dari Rp 1.000.000 (online)",
            duration: "Sangat fleksibel (pagi, siang, malam, hari kerja, akhir pekan)",
            classSize: "Privat",
            teacherQuality: "Native & Lokal, bersertifikasi TEFL, TESOL, CELTA.",
            method: "Fokus pada kelancaran dan kepercayaan diri, dapat disesuaikan.",
            features: "Tidak ada program khusus SMP, perlu konfirmasi penyesuaian kurikulum. Fokus utama cenderung ke klien korporat/dewasa.",
            logo: "🌐"
        },
        // Computer Courses
        {
            id: 5,
            category: "Komputer",
            name: "Computer Course Center",
            program: "Berbagai Program Komputer",
            tags: ["Sangat Direkomendasikan"],
            bestFor: "Kursus Komputer Komprehensif & Terakreditasi",
            hasCertificate: true,
            isPrivate: false, // Can be private/group based on program
            isSuitableForKidsTeens: true, // Has basic courses
            programTypes: ["Dasar & Office", "Desain & Kreatif", "Koding & Web"],
            address: "Jl. Nangka Selatan No 39/83, Denpasar - Bali",
            whatsapp: "081338582348",
            phone: "(0361) 8956936",
            cost: null,
            costText: "Bervariasi per program (mulai dari Rp 1.550.000)",
            duration: "Bervariasi per program (misal: Excel 7x @2 jam)",
            classSize: "Fleksibel (Grup/Privat)",
            teacherQuality: "Profesional", // Based on "tempat kursus komputer berkualitas"
            method: "Teori dan Praktik.",
            features: "Terakreditasi A, TUK-LSPTD-CCC, berbagai program (Administrasi Perkantoran, Desain Grafis, Web design, Web Programming, Animasi, Excel, AutoCAD, dll).",
            logo: "🖥️"
        },
        {
            id: 6,
            category: "Komputer",
            name: "LKP Ananta Course",
            program: "Kursus Komputer Bersertifikat Resmi",
            tags: ["Direkomendasikan"],
            bestFor: "Sertifikasi Nasional & Fleksibilitas Kelas",
            hasCertificate: true,
            isPrivate: true, // Offers private and group
            isSuitableForKidsTeens: true, // Has basic & MS Office
            programTypes: ["Dasar & Office", "Desain & Kreatif", "Koding & Web", "Digital Marketing"],
            address: "Jl. Pendidikan, Br. Blongbongan, Klungkung, Bali (pusat, tapi melayani Denpasar)", // Closest listed public address for context, assumed Denpasar coverage based on search
            whatsapp: "Lihat website", // Not explicitly mentioned in snippet
            phone: "Lihat website", // Not explicitly mentioned in snippet
            cost: null,
            costText: "Lihat di website",
            duration: "Fleksibel",
            classSize: "Grup (max 4) / Privat",
            teacherQuality: "Profesional", // "Trainer Berpengalaman"
            method: "Dapat disesuaikan kebutuhan",
            features: "Sertifikat diakui nasional (izin penyelenggaraan kursus dari Pemerintah Kabupaten Klungkung, NPSN: K9998627).",
            logo: "📄"
        },
        {
            id: 7,
            category: "Komputer",
            name: "BALITOP TRAINING",
            program: "Kursus Privat Komputer & Digital Marketing",
            tags: ["Direkomendasikan"],
            bestFor: "Kursus Privat Fleksibel & Terjangkau",
            hasCertificate: false, // Not explicitly mentioned for all courses, but some sources imply
            isPrivate: true,
            isSuitableForKidsTeens: false, // Seems more professional oriented
            programTypes: ["Dasar & Office", "Desain & Kreatif", "Koding & Web", "Digital Marketing"],
            address: "Jl. (Tidak disebutkan lengkap di snippet)", // Address vague
            whatsapp: "08174732579",
            phone: "08174732579",
            cost: 2350000, // MS Office Profesional
            costText: "Mulai dari Rp 850.000 (PPT) hingga Rp 2.350.000 (MS Office Profesional)",
            duration: "Bervariasi (misal: PPT 5x @2 jam, MS Office 15x @2 jam)",
            classSize: "Privat",
            teacherQuality: "Profesional", // "Trainer Berpengalaman"
            method: "Satu siswa satu pengajar, waktu fleksibel.",
            features: "Fokus pada materi unggulan (Web Dev, Digital Marketing, Desain Grafis, Office), diskon 5%.",
            logo: "💻"
        },
         {
            id: 8,
            category: "Komputer",
            name: "Timedoor Academy",
            program: "Kursus Coding & Komputer",
            tags: ["Sangat Direkomendasikan"],
            bestFor: "Pendidikan Coding & Teknologi untuk Anak/Remaja",
            hasCertificate: false, // Not explicitly stated in snippets, implies focus on skill
            isPrivate: false, // Primarily group, but can be adjusted
            isSuitableForKidsTeens: true,
            programTypes: ["Koding & Web", "Desain & Kreatif", "IoT & AI"],
            address: "Jl. Tukad Yeh Aya IX No.46, Renon, Denpasar Selatan (Renon) / Jl. Gatot Subroto Barat No.408b, Ubung, Denpasar Utara (Gatsu Barat)",
            whatsapp: "+6281237062219 (Renon) / +6281337300237 (Gatsu Barat)",
            phone: "Lihat WhatsApp",
            cost: null, // Varies significantly by program and age
            costText: "Lihat di website / kontak langsung (Ada program Basic Python Rp 2.200.000)",
            duration: "Bervariasi per program",
            classSize: "Fleksibel",
            teacherQuality: "Guru dan staf handal",
            method: "Interaktif, menyenangkan, kurikulum sesuai usia (Kids/Teens: Javascript, Block Coding, Roblox, AI).",
            features: "Berbagai program dari anak-anak (5 tahun) hingga dewasa, gratis kelas trial, mempersiapkan Next Technology Leaders.",
            logo: "🤖"
        },
        {
            id: 9,
            category: "Komputer",
            name: "Koding Akademi",
            program: "Kursus Komputer Terlengkap",
            tags: ["Sangat Direkomendasikan"],
            bestFor: "Bootcamp Intensif & Program Lengkap untuk Semua Usia",
            hasCertificate: false, // Not explicitly stated in snippets, implies focus on skill
            isPrivate: false, // Offers bootcamps and various courses
            isSuitableForKidsTeens: true,
            programTypes: ["Koding & Web", "Desain & Kreatif", "Game Programming", "App Programming"],
            address: "Jl. Tukad Batanghari No.55, Panjer, Denpasar Selatan, Bali",
            whatsapp: "+62813-3737-3155",
            phone: "Lihat WhatsApp",
            cost: null, // Varies significantly by program
            costText: "Mulai dari Rp 705.000 (Basic Coding) hingga Rp 12.500.000 (Fullstack Bootcamp)",
            duration: "Bervariasi per program (misal: bootcamp intensif)",
            classSize: "Fleksibel",
            teacherQuality: "Profesional",
            method: "Melatih dari dasar hingga lanjutan, termasuk aspek coding, desain grafis, pengelolaan data.",
            features: "Program terlengkap untuk anak-anak hingga dewasa, program bootcamp intensif, internship bagi academia (skill memadai).",
            logo: "⚙️"
        },
        {
            id: 10,
            category: "Komputer",
            name: "Revolusi Skill",
            program: "Les Komputer untuk SMP & Umum",
            tags: ["Direkomendasikan"],
            bestFor: "Kursus Komputer Dasar Fleksibel & Home Tutoring",
            hasCertificate: true,
            isPrivate: true, // Home Tutoring available
            isSuitableForKidsTeens: true, // Explicitly mentions SMP
            programTypes: ["Dasar & Office", "Desain & Kreatif"], // Canva Profesional
            address: "Denpasar, Bali (Home Tutoring / Online)", // Specific address not clearly listed, but serves Denpasar
            whatsapp: "085161899321",
            phone: "Lihat WhatsApp",
            cost: null, // Not explicitly listed in snippets
            costText: "Terjangkau (info di website / kontak langsung)",
            duration: "Fleksibel, dapat request materi",
            classSize: "Privat / Fleksibel",
            teacherQuality: "Instruktur Profesional & Berpengalaman",
            method: "10% teori dan 90% praktik, metode pembelajaran interaktif.",
            features: "Layanan asistensi, kurikulum selalu update, bisa home tutoring, cocok untuk SMP.",
            logo: "💡"
        }
    ];

    let currentCategory = "English"; // Default category

    const filters = {
        "English": {
            hasCertificate: true,
            isForSmp: true,
            isPrivate: false,
            hasNative: false
        },
        "Komputer": {
            hasCertificate: true,
            isPrivate: false,
            isSuitableForKidsTeens: false,
            programType_Dasar_Office: false,
            programType_Desain_Kreatif: false,
            programType_Koding_Web: false
        }
    };

    const coursesGrid = document.getElementById('courses-grid');
    const mainFilterButtons = document.querySelectorAll('.btn-main-filter');
    const englishFiltersDiv = document.getElementById('english-filters');
    const computerFiltersDiv = document.getElementById('computer-filters');
    const subFilterButtons = document.querySelectorAll('.btn-sub-filter');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const comparisonChartSection = document.getElementById('comparison-chart-section');
    const recommendationContent = document.getElementById('recommendation-content');

    let costChartInstance = null; // To store the Chart.js instance

    function updateRecommendations() {
        let html = '';
        if (currentCategory === 'English') {
            html = `
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-lg text-slate-800 mb-2">⭐ Pilihan Utama Bahasa Inggris</h3>
                    <p class="mb-3"><strong class="text-teal-600">IALF Bali:</strong> Pilihan terbaik untuk pembelajaran terstruktur dengan fasilitas lengkap dan guru bersertifikasi internasional. Sangat direkomendasikan jika Anda mencari kurikulum yang komprehensif.</p>
                    <p><strong class="text-teal-600">Jolly Roger Education:</strong> Ideal untuk siswa yang membutuhkan perhatian personal melalui metode privat 1-on-1. Jaminan unik mereka juga menjadi nilai tambah yang signifikan.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-lg text-slate-800 mb-2">⚠️ Perlu Konfirmasi (Bahasa Inggris)</h3>
                    <p class="mb-3"><strong class="text-amber-600">UNMAS Denpasar:</strong> Perlu dipastikan kembali apakah program Kids-Teens menyediakan sertifikat. Kontak WhatsApp yang tersedia mungkin bukan untuk program ini secara spesifik.</p>
                    <p><strong class="text-amber-600">English Today Bali:</strong> Meskipun berkualitas, tidak ada program khusus SMP. Pastikan kurikulum privatnya dapat disesuaikan untuk kebutuhan anak Anda.</p>
                </div>
            `;
        } else if (currentCategory === 'Komputer') {
            html = `
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-lg text-slate-800 mb-2">⭐ Pilihan Utama Kursus Komputer</h3>
                    <p class="mb-3"><strong class="text-teal-600">Computer Course Center:</strong> Pilihan solid untuk berbagai program komputer terakreditasi, dari dasar hingga desain grafis dan pemrograman. Cocok untuk semua tingkatan.</p>
                    <p class="mb-3"><strong class="text-teal-600">Timedoor Academy & Koding Akademi:</strong> Sangat direkomendasikan untuk pendidikan coding, pemrograman, dan teknologi bagi anak-anak dan remaja, dengan kurikulum yang menarik dan relevan.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow">
                    <h3 class="font-bold text-lg text-slate-800 mb-2">⚠️ Pertimbangan Tambahan (Kursus Komputer)</h3>
                    <p class="mb-3"><strong class="text-amber-600">LKP Ananta Course & BALITOP TRAINING:</strong> Menawarkan sertifikat yang diakui dan pelatihan privat yang fleksibel, tetapi perlu konfirmasi detail program dan biaya langsung.</p>
                     <p><strong class="text-amber-600">Revolusi Skill:</strong> Baik untuk komputer dasar dan fleksibilitas, termasuk home tutoring. Pastikan program spesifik sesuai kebutuhan anak Anda.</p>
                </div>
            `;
        }
        recommendationContent.innerHTML = html;
    }


    function createCard(course) {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col";
        
        let tagHtml = '';
        if (course.tags.includes("Sangat Direkomendasikan")) {
            tagHtml = `<span class="tag tag-recommendation">${course.tags[0]}</span>`;
        } else {
            tagHtml = `<span class="tag tag-warning">${course.tags[0]}</span>`;
        }

        let specificDetail = '';
        if (course.category === 'English') {
            specificDetail = `<p class="text-slate-600 mb-4 h-12"><strong>Terbaik untuk:</strong> ${course.bestFor}</p>`;
        } else {
             specificDetail = `<p class="text-slate-600 mb-4 h-12"><strong>Program Unggulan:</strong> ${course.program}</p>`;
        }

        card.innerHTML = `
            <div class="p-6 flex-grow">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">${course.name}</h3>
                        <p class="text-sm text-slate-500">${course.program}</p>
                    </div>
                    ${tagHtml}
                </div>

                ${specificDetail}

                <div class="grid grid-cols-2 gap-3 text-sm mb-6">
                    <div class="flex items-center gap-2"><span class="text-xl">📍</span><span>${course.address.split(',')[0]}</span></div>
                    <div class="flex items-center gap-2"><span class="text-xl">💰</span><span>${course.costText}</span></div>
                    <div class="flex items-center gap-2"><span class="text-xl">⏳</span><span>${course.duration || 'Tidak disebutkan'}</span></div>
                    <div class="flex items-center gap-2"><span class="text-xl">👥</span><span>${course.classSize || 'Tidak disebutkan'}</span></div>
                </div>
            </div>
            <div class="p-4 bg-slate-50 border-t flex justify-end">
                <button data-id="${course.id}" class="btn-detail font-semibold bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors">Lihat Detail</button>
            </div>
        `;

        card.querySelector('.btn-detail').addEventListener('click', () => showModal(course.id));
        return card;
    }

    function renderCourses() {
        coursesGrid.innerHTML = '';
        const currentFilters = filters[currentCategory];
        
        const filteredCourses = coursesData.filter(course => {
            if (course.category !== currentCategory) return false;

            let passesAllSubFilters = true;

            if (currentCategory === "English") {
                if (currentFilters.hasCertificate && !course.hasCertificate) passesAllSubFilters = false;
                if (currentFilters.isForSmp && !course.isForSmp) passesAllSubFilters = false;
                if (currentFilters.isPrivate && !course.isPrivate) passesAllSubFilters = false;
                if (currentFilters.hasNative && !course.hasNative) passesAllSubFilters = false;
            } else if (currentCategory === "Komputer") {
                if (currentFilters.hasCertificate && !course.hasCertificate) passesAllSubFilters = false;
                if (currentFilters.isPrivate && !course.isPrivate) passesAllSubFilters = false;
                if (currentFilters.isSuitableForKidsTeens && !course.isSuitableForKidsTeens) passesAllSubFilters = false;
                
                let programTypeFiltered = false;
                let anyProgramTypeSelected = false;
                for (const key in currentFilters) {
                    if (key.startsWith('programType_') && currentFilters[key]) {
                        anyProgramTypeSelected = true;
                        const programType = key.replace('programType_', '').replace(/_/g, ' ');
                        if (course.programTypes && course.programTypes.includes(programType)) {
                            programTypeFiltered = true;
                            break;
                        }
                    }
                }
                if (anyProgramTypeSelected && !programTypeFiltered) {
                    passesAllSubFilters = false;
                } else if (!anyProgramTypeSelected) {
                    // If no program type filter is selected, all program types pass this filter
                }
            }
            return passesAllSubFilters;
        });

        if (filteredCourses.length === 0) {
            coursesGrid.innerHTML = `<p class="text-slate-500 col-span-full text-center">Tidak ada kursus yang sesuai dengan filter Anda. Coba nonaktifkan beberapa filter.</p>`;
        } else {
            filteredCourses.forEach(course => {
                coursesGrid.appendChild(createCard(course));
            });
        }
        
        renderChart(); // Re-render chart based on current category
        updateRecommendations(); // Update recommendations based on current category
    }

    mainFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            mainFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            
            // Show/hide sub-filters based on category
            if (currentCategory === "English") {
                englishFiltersDiv.classList.remove('hidden');
                computerFiltersDiv.classList.add('hidden');
                comparisonChartSection.classList.remove('hidden'); // Show chart for English
            } else {
                englishFiltersDiv.classList.add('hidden');
                computerFiltersDiv.classList.remove('hidden');
                comparisonChartSection.classList.add('hidden'); // Hide chart for Computer
            }
            
            // Reset sub-filter states to initial for the new category
            // This ensures fresh filtering when switching categories
            for (const key in filters[currentCategory]) {
                 filters[currentCategory][key] = false; // Deactivate all sub-filters initially
            }
            // Re-activate default filters if any
            if (currentCategory === "English") {
                filters.English.hasCertificate = true;
                filters.English.isForSmp = true;
            } else if (currentCategory === "Komputer") {
                filters.Komputer.hasCertificate = true;
            }
            
            // Update sub-filter button visual states
            subFilterButtons.forEach(btn => btn.classList.remove('active'));
            const activeSubFilters = document.querySelectorAll(`#${currentCategory.toLowerCase()}-filters .btn-sub-filter`);
            activeSubFilters.forEach(btn => {
                const filterName = btn.dataset.filter;
                if (filterName.startsWith('programType_')) {
                    if (filters[currentCategory][filterName]) {
                        btn.classList.add('active');
                    }
                } else if (filters[currentCategory][filterName]) {
                    btn.classList.add('active');
                }
            });

            renderCourses();
        });
    });

    subFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterName = button.dataset.filter;
            // Handle programType filters as multi-select
            if (filterName.startsWith('programType_')) {
                filters[currentCategory][filterName] = !filters[currentCategory][filterName];
            } else {
                // Other filters are single toggle
                filters[currentCategory][filterName] = !filters[currentCategory][filterName];
            }
            button.classList.toggle('active');
            renderCourses();
        });
    });

    function showModal(courseId) {
        const course = coursesData.find(c => c.id === courseId);
        modalTitle.textContent = course.name;
        
        let modalHtml = '';
        if (course.category === 'English') {
            modalHtml = `
                <div class="space-y-6">
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Ringkasan Program</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>Program:</strong> ${course.program}</p>
                            <p><strong>Sertifikat:</strong> <span class="font-semibold ${course.hasCertificate ? 'text-teal-600' : 'text-amber-600'}">${course.hasCertificate ? 'Tersedia' : 'Perlu Dikonfirmasi'}</span></p>
                            <p><strong>Target:</strong> ${course.isForSmp ? 'Khusus SMP' : 'Umum (Perlu Penyesuaian)'}</p>
                            <p><strong>Metode Kelas:</strong> ${course.isPrivate ? 'Privat 1-on-1' : 'Grup'}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Informasi Kontak & Lokasi</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>📍 Alamat:</strong> ${course.address}</p>
                            <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/${course.whatsapp.replace(/\D/g,'')}" target="_blank" class="text-teal-600 hover:underline">${course.whatsapp}</a></p>
                            <p><strong>📞 Telepon:</strong> ${course.phone}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Detail Kursus</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>💰 Biaya:</strong> ${course.costText}</p>
                            <p><strong>⏳ Durasi:</strong> ${course.duration}</p>
                            <p><strong>👥 Ukuran Kelas:</strong> ${course.classSize}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Kualitas & Metode Pengajaran</h4>
                        <div class="bg-slate-50 p-4 rounded-lg space-y-3 text-sm">
                            <p><strong>👩‍🏫 Kualitas Pengajar:</strong> ${course.teacherQuality}</p>
                            <p><strong>✍️ Metode:</strong> ${course.method}</p>
                        </div>
                    </div>
                     <div>
                        <h4 class="font-bold text-slate-600 mb-2">Fitur Unggulan & Catatan Penting</h4>
                        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-sm">
                            <p>${course.features}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (course.category === 'Komputer') {
            modalHtml = `
                <div class="space-y-6">
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Ringkasan Program</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>Program:</strong> ${course.program}</p>
                            <p><strong>Sertifikat:</strong> <span class="font-semibold ${course.hasCertificate ? 'text-teal-600' : 'text-amber-600'}">${course.hasCertificate ? 'Tersedia' : 'Perlu Dikonfirmasi'}</span></p>
                            <p><strong>Target:</strong> ${course.isSuitableForKidsTeens ? 'Cocok untuk Anak/Remaja' : 'Umum/Profesional'}</p>
                            <p><strong>Metode Kelas:</strong> ${course.isPrivate ? 'Privat 1-on-1' : 'Grup/Fleksibel'}</p>
                            <p><strong>Jenis Program:</strong> ${course.programTypes ? course.programTypes.join(', ') : 'Tidak disebutkan'}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Informasi Kontak & Lokasi</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>📍 Alamat:</strong> ${course.address}</p>
                            <p><strong>💬 WhatsApp:</strong> ${course.whatsapp ? `<a href="https://wa.me/${course.whatsapp.replace(/\D/g,'')}" target="_blank" class="text-teal-600 hover:underline">${course.whatsapp}</a>` : 'Tidak tersedia'}</p>
                            <p><strong>📞 Telepon:</strong> ${course.phone || 'Tidak tersedia'}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Detail Kursus</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-lg">
                            <p><strong>💰 Biaya:</strong> ${course.costText}</p>
                            <p><strong>⏳ Durasi:</strong> ${course.duration || 'Tidak disebutkan'}</p>
                            <p><strong>👥 Ukuran Kelas:</strong> ${course.classSize || 'Tidak disebutkan'}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-600 mb-2">Kualitas & Metode Pengajaran</h4>
                        <div class="bg-slate-50 p-4 rounded-lg space-y-3 text-sm">
                            <p><strong>👩‍🏫 Kualitas Pengajar:</strong> ${course.teacherQuality || 'Tidak disebutkan'}</p>
                            <p><strong>✍️ Metode:</strong> ${course.method || 'Tidak disebutkan'}</p>
                        </div>
                    </div>
                     <div>
                        <h4 class="font-bold text-slate-600 mb-2">Fitur Unggulan & Catatan Penting</h4>
                        <div class="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-sm">
                            <p>${course.features}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        modalBody.innerHTML = modalHtml;
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
    }

    function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.add('scale-95');
    }
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function renderChart() {
        const ctx = document.getElementById('costChart').getContext('2d');
        if (costChartInstance) {
            costChartInstance.destroy(); // Destroy previous chart instance
        }

        if (currentCategory === 'English') {
            comparisonChartSection.classList.remove('hidden');
            const chartData = coursesData.filter(c => c.category === 'English' && c.cost !== null);

            costChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.map(c => c.name),
                    datasets: [{
                        label: 'Biaya Kursus (dalam Rupiah)',
                        data: chartData.map(c => c.cost),
                        backgroundColor: [
                            'rgba(20, 184, 166, 0.6)',
                            'rgba(13, 148, 136, 0.6)',
                            'rgba(245, 158, 11, 0.6)',
                            'rgba(217, 119, 6, 0.6)'
                        ],
                        borderColor: [
                            'rgb(15, 118, 110)',
                            'rgb(13, 148, 136)',
                            'rgb(245, 158, 11)',
                            'rgb(217, 119, 6)'
                        ],
                        borderWidth: 1.5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value, index, values) {
                                    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
                                },
                                color: '#475569'
                            }
                        },
                         x: {
                            ticks: {
                                color: '#475569'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    }
                }
            });
        } else {
            comparisonChartSection.classList.add('hidden'); // Hide chart for Computer courses
        }
    }
    
    // Initial render
    // Set initial filter state for English (default)
    filters.English.hasCertificate = true;
    filters.English.isForSmp = true;

    // Trigger initial UI setup
    document.querySelector('.btn-main-filter[data-category="English"]').click(); // Simulate click to set default category and filters
});