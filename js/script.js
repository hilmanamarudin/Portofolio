/* SCRIPT.JS - membaca DATA dari data.js lalu menampilkannya. Biasanya tidak perlu diedit. */
const $ = (id) => document.getElementById(id);
const P = DATA.profile;
const tagsHtml = (list) => `<div class="tags">${list.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;

/* ----- Hero, About, Footer ----- */
function renderProfile() {
  document.title = `${P.name} | Portfolio`;
  $("logo").textContent = P.name.split(" ")[0];
  $("heroName").textContent = P.name;
  $("heroDesc").textContent = `${P.heroDesc} Berlokasi di ${P.location}.`;
  $("aboutText").textContent = P.about;
  $("cvBtn").href = P.cv;
  $("footer").textContent = `© ${new Date().getFullYear()} ${P.name}`;
  $("initials").textContent = P.name.split(" ").map(n => n[0]).join(""); 
  const photo = $("photo");
  // Foto dicari otomatis: nama dari data.js dulu, lalu profile.jpg/jpeg/png/webp (huruf kecil & besar).
  const calon = [P.photo, ...["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "jfif"].map(e => `assets/images/profile.${e}`)];
  let urutan = 0;
  photo.onerror = () => {
    urutan++;
    if (urutan < calon.length) photo.src = calon[urutan];
    else { photo.remove(); console.warn("Foto tidak ditemukan. Taruh di assets/images/ dengan nama profile.jpg"); }
  };
  photo.src = calon[0];
}

/* ----- Pendidikan & Pengalaman (timeline) ----- */
function renderEducation() {
  $("eduList").innerHTML = DATA.education.map(e =>
    `<div class="item"><h3>${e.school}</h3><p class="muted">${e.major} ${e.year}</p></div>`).join("");
}
function renderExperience() {
  $("expList").innerHTML = DATA.experience.map(x => `
    <div class="item"><h3>${x.role}</h3>
      <p class="muted">${[x.place, x.period].filter(Boolean).join(" • ")}</p>
      ${x.tasks.length ? `<ul>${x.tasks.map(t => `<li>${t}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
}

/* ----- Skills ----- */
function renderSkills() {
  $("skillList").innerHTML = Object.entries(DATA.skills).map(([cat, list]) =>
    `<div class="card"><h3>${cat}</h3>${tagsHtml(list)}</div>`).join("");
}

/* ----- Proyek + Modal detail ----- */
function renderProjects() {
  $("projList").innerHTML = DATA.projects.map((p, i) => `
    <article class="card">
      <div class="thumb"><i data-lucide="folder-code"></i><img src="${p.image}" alt="${p.name}" onerror="this.remove()"></div>
      <h3>${p.name}</h3><p class="muted">${p.description}</p>
      ${tagsHtml(p.tech)}
      <button class="btn" onclick="openProject(${i})">Detail</button>
    </article>`).join("");
}
function openProject(i) {
  const p = DATA.projects[i];
  $("modalBox").innerHTML = `<h3>${p.name}</h3><p class="muted">${p.description}</p>${tagsHtml(p.tech)}
    <div class="btns">${p.link ? `<a class="btn primary" href="${p.link}" target="_blank" rel="noopener">Buka proyek</a>` : ""}
    <button class="btn" onclick="closeModal()">Tutup</button></div>`;
  $("modal").hidden = false;
}
function closeModal() { $("modal").hidden = true; }

/* ----- Sertifikat ----- */
function renderCertificates() {
  $("certList").innerHTML = DATA.certificates.map(c => `
    <article class="card"><div class="thumb"><i data-lucide="award"></i><img src="${c.image}" alt="${c.name}" onerror="this.remove()"></div>
    <h3>${c.name}</h3><p class="muted">${c.issuer} • ${c.year}</p></article>`).join("");
}

/* ----- Kontak ----- */
function renderContact() {
  const c = DATA.contact;
  const rows = [["mail", c.email, `mailto:${c.email}`], ["message-circle", "WhatsApp", `https://wa.me/${c.whatsapp}`],
                ["linkedin", "LinkedIn", c.linkedin], ["github", "GitHub", c.github]];
  $("contactList").innerHTML = rows.map(r =>
    `<li><a href="${r[2]}" target="_blank" rel="noopener"><i data-lucide="${r[0]}"></i>${r[1]}</a></li>`).join("");
}

/* ----- Form kontak: validasi sederhana, lalu buka WhatsApp ----- */
function setupForm() {
  $("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target, v = (n) => f[n].value.trim();
    const err = {
      nama: v("nama").length < 2 ? "Isi nama minimal 2 huruf." : "",
      email: /^\S+@\S+\.\S+$/.test(v("email")) ? "" : "Masukkan email yang valid.",
      pesan: v("pesan").length < 10 ? "Pesan minimal 10 karakter." : ""
    };
    Object.keys(err).forEach(n => f[n].parentElement.querySelector("small").textContent = err[n]);
    if (Object.values(err).some(Boolean)) return;
    const text = encodeURIComponent(`Halo, saya ${v("nama")} (${v("email")}).\n${v("pesan")}`);
    window.open(`https://wa.me/${DATA.contact.whatsapp}?text=${text}`, "_blank");
    $("formInfo").textContent = "Terima kasih! WhatsApp dibuka untuk mengirim pesan.";
    f.reset();
  });
}

/* ----- Dark / Light mode (disimpan di browser) ----- */
function setupTheme() {
  const root = document.documentElement;
  const set = (t) => {
    root.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
    $("themeBtn").innerHTML = `<i data-lucide="${t === "dark" ? "sun" : "moon"}"></i>`;
    lucide.createIcons();
  };
  let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
  set(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("themeBtn").onclick = () => set(root.dataset.theme === "dark" ? "light" : "dark");
}

/* ----- Menu mobile & modal ----- */
function setupNav() {
  $("menuBtn").onclick = () => $("menu").classList.toggle("open");
  $("menu").onclick = () => $("menu").classList.remove("open");
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());
  $("modal").onclick = (e) => e.target.id === "modal" && closeModal();
}

/* ----- Teks mengetik di Hero ----- */
function setupTyping() {
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = P.roles[r];
    c += del ? -1 : 1;
    $("typed").textContent = word.slice(0, c);
    let wait = del ? 40 : 90;
    if (!del && c === word.length) { del = true; wait = 1400; }
    else if (del && c === 0) { del = false; r = (r + 1) % P.roles.length; wait = 300; }
    setTimeout(tick, wait);
  })();
}

/* ----- Muncul saat di-scroll ----- */
function setupReveal() {
  const io = new IntersectionObserver((es) => es.forEach(e => e.isIntersecting && e.target.classList.add("show")), { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ----- Jalankan semuanya ----- */
renderProfile(); renderEducation(); renderSkills(); renderExperience();
renderProjects(); renderCertificates(); renderContact();
setupTheme(); setupNav(); setupForm(); setupTyping(); setupReveal();
lucide.createIcons();