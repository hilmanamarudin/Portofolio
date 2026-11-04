/* BACKGROUND.JS - animasi latar belakang.
   Titik + garis = jaringan (IT Support & Network).
   Simbol yang melayang = kode web & data (HTML, CSS, JS, PHP, SQL).
   Bergerak mengikuti mouse/sentuhan. */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

/* ===== PENGATURAN (boleh diubah) ===== */
const SIMBOL = ["</>", "{ }", "HTML", "CSS", "JS", "PHP", "SQL", "01", "10", "WiFi", "Data"];
const JUMLAH_TITIK = 60;      // makin besar makin ramai
const JARAK_GARIS = 130;      // jarak maksimal titik tersambung

let w, h, titik = [], mouse = { x: -999, y: -999 };

function ukuran() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
  const n = w < 700 ? JUMLAH_TITIK / 2 : JUMLAH_TITIK;
  titik = Array.from({ length: n }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
    simbol: Math.random() < .3 ? SIMBOL[Math.floor(Math.random() * SIMBOL.length)] : null
  }));
}

/* Ambil warna aksen dari CSS supaya ikut dark/light mode */
function warna() {
  return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
}

function gambar() {
  ctx.clearRect(0, 0, w, h);
  const c = warna();
  ctx.fillStyle = c; ctx.strokeStyle = c;
  ctx.font = "600 13px Sora, sans-serif";

  for (const p of titik) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;        // pantul di tepi layar
    if (p.y < 0 || p.y > h) p.vy *= -1;
    // menjauh pelan dari kursor
    const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
    if (d < 120) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }

    ctx.globalAlpha = .45;
    if (p.simbol) ctx.fillText(p.simbol, p.x, p.y);
    else { ctx.beginPath(); ctx.arc(p.x, p.y, 2.2, 0, 7); ctx.fill(); }
  }
  // garis antar titik yang berdekatan
  for (let i = 0; i < titik.length; i++)
    for (let j = i + 1; j < titik.length; j++) {
      const d = Math.hypot(titik[i].x - titik[j].x, titik[i].y - titik[j].y);
      if (d < JARAK_GARIS) {
        ctx.globalAlpha = (1 - d / JARAK_GARIS) * .25;
        ctx.beginPath(); ctx.moveTo(titik[i].x, titik[i].y); ctx.lineTo(titik[j].x, titik[j].y); ctx.stroke();
      }
    }
}

function jalan() { gambar(); requestAnimationFrame(jalan); }

addEventListener("resize", ukuran);
addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
ukuran();
// Jika pengguna memilih "kurangi gerakan", tampilkan gambar diam saja
matchMedia("(prefers-reduced-motion: reduce)").matches ? gambar() : jalan();
