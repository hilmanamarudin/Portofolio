# Portfolio Hilman Amarudin

## Cara menjalankan (Visual Studio Code)
1. Ekstrak folder `portfolio`, lalu di VS Code pilih **File > Open Folder**.
2. Buka **Extensions**, pasang **Live Server** (Ritwick Dey).
3. Klik kanan `index.html` > **Open with Live Server**. Website terbuka di browser dan otomatis refresh saat file disimpan.
   (Bisa juga langsung klik dua kali `index.html`.)
4. Perlu internet untuk Google Fonts dan ikon Lucide.

## Yang perlu diedit
| Ingin mengganti | Lakukan |
|---|---|
| Nama, deskripsi, lokasi | `js/data.js` > `profile` |
| Foto profil | Taruh `profile.jpg` di `assets/images/` (atau ubah `photo`) |
| CV | Taruh `CV-Hilman-Amarudin.pdf` di `assets/documents/` |
| Email, WhatsApp, LinkedIn, GitHub | `js/data.js` > `contact` (WhatsApp pakai format 62812...) |
| Skill | `js/data.js` > `skills` (hapus/ganti teks di dalam tanda `[ ]`) |
| Proyek | `js/data.js` > `projects` (salin satu blok `{ ... }` untuk menambah, hapus untuk menghapus) |
| Sertifikat | `js/data.js` > `certificates` + gambar di `assets/certificates/` |
| Warna | `css/style.css`, bagian `:root` paling atas |

## Cara kerja singkat
- `index.html` = kerangka halaman (kosong, diisi otomatis).
- `data.js` = semua isi/data Anda.
- `script.js` = membaca data lalu membuat tampilan, dark mode, animasi, form.
- `style.css` = tampilan dan warna.
Form kontak divalidasi, lalu membuka WhatsApp dengan pesan terisi (tanpa server).
