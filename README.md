<div align="center">
  <img src="./public/logo-makjulo.png" alt="Logo Makjulo" width="100" height="100" style="border-radius: 50%;" />
  
  <h1>Makjulo</h1>
  <p><strong>Website Profil & Pemasaran Manisan Kulit Jeruk Pamelo</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-new--york-black?style=flat-square" alt="shadcn/ui" />
  </p>

  <p>
    <a href="https://wa.me/6281945055565">💬 Order via WhatsApp</a> •
    <a href="#-fitur-utama">Fitur</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-cara-instalasi">Instalasi</a>
  </p>
</div>

---

## Deskripsi

**Makjulo** adalah website profil dan pemasaran digital untuk produk camilan inovatif berupa **manisan kulit jeruk pamelo** — sebuah solusi *zero waste* yang mengolah limbah kulit jeruk menjadi camilan sehat, lezat, dan bernilai tinggi.

Website ini dibangun sebagai bagian dari **Program Kuliah Nyata** oleh mahasiswa S1 Teknik Informatika **Universitas Negeri Surabaya (UNESA)** untuk membantu UMKM lokal menjangkau pasar yang lebih luas melalui kehadiran digital yang profesional.

**Masalah yang diselesaikan:**
- Limbah kulit jeruk pamelo yang melimpah dan tidak termanfaatkan
- Kurangnya visibilitas digital untuk produk camilan lokal berkualitas
- Kesulitan UMKM dalam membangun *brand presence* yang profesional secara online

---

## Fitur Utama

- **Landing Page One-Page** — Seluruh konten tersaji dalam satu halaman yang mengalir dengan navigasi smooth scroll
- **Navigasi Responsif** — Navbar adaptif dengan efek transparan saat di atas dan blur saat di-scroll, lengkap dengan menu mobile drawer
- **Seksi Beranda** — Hero section animatif dengan statistik perusahaan (10K+ Pelanggan, 15+ Penghargaan, 100% Bahan Alami)
- **Kisah Kami** — Narasi perjalanan brand Makjulo dari ide hingga produk nyata
- **Tentang Kami** — Nilai-nilai perusahaan: Cinta Lokal, Ramah Lingkungan, Inovasi Rasa
- **Keunggulan Produk** — 6 keunggulan utama beserta papan pencapaian (50K+ Produk Terjual, 100+ Reseller)
- **Katalog Produk** — Kartu produk interaktif dengan 4 varian (Original, Pedas-Manis, Cokelat, Matcha) dan label "Terlaris" / "Coming Soon"
- **Seksi Promo** — Banner penawaran harga Rp10.000/pack dengan CTA langsung ke WhatsApp
- **Testimoni Slider** — Carousel testimoni pelanggan dengan navigasi prev/next dan dot indicator
- **Form Kontak** — Form pengiriman pesan lengkap dengan detail kontak dan integrasi WhatsApp/Instagram
- **Profil Tim Developer** — Galeri tim pengembang mahasiswa UNESA
- **Footer** — Footer informatif dengan tautan cepat
- **Animasi Halus** — Seluruh elemen menggunakan animasi entrance, hover, dan transisi via Framer Motion
- **Analitik Produksi** — Terintegrasi dengan Vercel Analytics secara otomatis di lingkungan produksi

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Bahasa** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Komponen UI** | [shadcn/ui](https://ui.shadcn.com/) (style: new-york) + [Radix UI](https://www.radix-ui.com/) |
| **Animasi** | [Framer Motion](https://www.framer-motion.com/) |
| **Ikon** | [Lucide React](https://lucide.dev/) |
| **Tipografi** | [Google Fonts](https://fonts.google.com/) — Fredoka (heading) + Nunito (body) |
| **Validasi Form** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Analitik** | [Vercel Analytics](https://vercel.com/analytics) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Linting** | ESLint (konfigurasi Next.js bawaan) |

---

## Struktur Folder

```
Makjulo/
├── 📁 app/                     # App Router Next.js
│   ├── globals.css             # Konfigurasi tema global (CSS Variables, Tailwind)
│   ├── layout.tsx              # Root layout (font, metadata, analytics)
│   └── page.tsx                # Halaman utama yang merangkai semua seksi
│
├── 📁 components/              # Komponen React
│   ├── navigasi.tsx            # Navbar fixed dengan smooth scroll & mobile menu
│   ├── bagian-beranda.tsx      # Hero section dengan statistik animatif
│   ├── bagian-kisah-kami.tsx   # Seksi kisah/perjalanan brand
│   ├── bagian-tentang.tsx      # Seksi tentang & nilai perusahaan
│   ├── bagian-keunggulan.tsx   # Keunggulan produk & papan pencapaian
│   ├── bagian-produk.tsx       # Katalog produk dengan kartu interaktif
│   ├── bagian-promo.tsx        # Banner promo & CTA WhatsApp
│   ├── bagian-testimoni.tsx    # Slider testimoni pelanggan
│   ├── bagian-kontak.tsx       # Form kontak & detail informasi kontak
│   ├── bagian-banner.tsx       # Komponen banner tambahan
│   ├── bagian-developer.tsx    # Profil tim developer
│   ├── bagian-footer.tsx       # Footer website
│   ├── theme-provider.tsx      # Provider untuk manajemen tema (next-themes)
│   └── 📁 ui/                  # Komponen shadcn/ui (Button, Card, Input, dll.)
│
├── 📁 hooks/                   # Custom React Hooks
│   ├── use-mobile.ts           # Hook untuk deteksi perangkat mobile
│   └── use-toast.ts            # Hook untuk notifikasi toast
│
├── 📁 lib/                     # Utilitas & helper
│   └── utils.ts                # Fungsi `cn()` untuk Tailwind class merging
│
├── 📁 public/                  # Aset statis (gambar, logo)
│   ├── logo-makjulo.png        # Logo brand
│   ├── banner-makjulo.png      # Banner promosi
│   ├── Flayyerr.png            # Flyer produk
│   ├── Makjulo Original.png    # Foto produk varian Original
│   ├── Makjulo Pedas Manis.png # Foto produk varian Pedas Manis
│   ├── Makjulo Coklat.png      # Foto produk varian Cokelat
│   ├── Makjulo Matcha.png      # Foto produk varian Matcha
│   └── ...                     # Foto tim developer
│
├── 📁 styles/                  # (Opsional) File CSS tambahan
│   └── globals.css
│
├── components.json             # Konfigurasi shadcn/ui
├── next.config.mjs             # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi PostCSS (Tailwind)
├── tailwind.config.ts          # Konfigurasi Tailwind CSS
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json                # Dependensi & skrip npm
```

---

## Prasyarat

Pastikan perangkat Anda telah terinstal:

| Prasyarat | Versi Minimum | Cara Cek |
|---|---|---|
| [Node.js](https://nodejs.org/) | `>= 18.x` | `node -v` |
| [pnpm](https://pnpm.io/installation) | `>= 8.x` | `pnpm -v` |
| Git | Terbaru | `git --version` |

> **Tips:** Disarankan menggunakan **Node.js versi LTS** terbaru. Anda bisa menggunakan [nvm](https://github.com/nvm-sh/nvm) untuk mengelola versi Node.js.

---

## Cara Instalasi

Ikuti langkah-langkah berikut untuk menjalankan project di lokal:

**1. Clone Repository**

```bash
git clone https://github.com/<username>/makjulo.git
cd makjulo
```

**2. Install Dependensi**

```bash
pnpm install
```

**3. Jalankan Development Server**

```bash
pnpm dev
```

**4. Buka di Browser**

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

Aplikasi akan otomatis *hot-reload* setiap kali Anda menyimpan perubahan pada file.

---

## Konfigurasi Environment Variables

Project ini saat ini **tidak memerlukan file `.env`** untuk berjalan secara lokal karena tidak memiliki koneksi database atau API eksternal berbayar.

Namun, jika Anda ingin menambahkan integrasi tambahan di masa mendatang (misalnya Resend untuk email form kontak), berikut adalah variabel yang perlu dikonfigurasi:

**Langkah konfigurasi (jika diperlukan):**
```bash
# Salin template environment variable
cp .env.example .env.local
```

| Variabel | Deskripsi | Contoh Nilai | Wajib? |
|---|---|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp untuk tombol order | `6281945055565` | Opsional |
| `NEXT_PUBLIC_GA_ID` | ID Google Analytics | `G-XXXXXXXXXX` | Opsional |
| `RESEND_API_KEY` | API Key Resend untuk form kontak | `re_xxxxxxxxxxxx` | Opsional |

> **Catatan:** Variabel dengan prefix `NEXT_PUBLIC_` dapat diakses di sisi client (browser). Variabel tanpa prefix bersifat server-only.

---

## Cara Penggunaan / Menjalankan Project

### Mode Development

```bash
pnpm dev
```
Menjalankan server development di `http://localhost:3000` dengan hot-reload aktif.

### Build Produksi

```bash
pnpm build
```
Mengompilasi aplikasi untuk produksi. Output tersimpan di folder `.next/`.

### Menjalankan Build Produksi Secara Lokal

```bash
pnpm start
```
Menjalankan server produksi berdasarkan hasil `pnpm build`. Harus dijalankan setelah `build` selesai.

### Linting Kode

```bash
pnpm lint
```
Memeriksa kualitas kode menggunakan ESLint dengan aturan konfigurasi Next.js.

---

## Deploy ke Produksi

Cara termudah untuk mendeploy website ini adalah melalui **[Vercel](https://vercel.com/)**, platform yang direkomendasikan oleh tim Next.js:

1. Push kode ke GitHub/GitLab/Bitbucket
2. Import repository di [vercel.com/new](https://vercel.com/new)
3. Vercel akan otomatis mendeteksi Next.js dan mengonfigurasi build
4. Klik **Deploy** — selesai! 🎉

Vercel Analytics sudah terintegrasi dan akan aktif secara otomatis di lingkungan produksi.

---

## Tim Developer

Dikembangkan dengan ❤️ oleh mahasiswa S1 Teknik Informatika **Universitas Negeri Surabaya (UNESA)**:

| Nama | Peran |
|---|---|
| **Qolbun Halim Hidayatulloh** | Full Stack Developer |
| **Pratama Dikcy** | UI/UX Designer |
| **Wafiq Ulil Abshor** | Business Developer |

---

## Kontak & Informasi Produk

| Saluran | Detail |
|---|---|
| **Alamat** | Jl. Barat No.358-360, Kleco, Maospati, Kab. Magetan, Jawa Timur 63392 |
| **WhatsApp** | [+62 819 4505 5565](https://wa.me/6281945055565) |
| **Email** | makjuloofficial@gmail.com |
| **Jam Operasional** | Senin–Sabtu, 08:00–17:00 WIB |

---

## Lisensi

Project ini dibuat untuk keperluan **akademis (Kuliah Nyata)** dan **pengembangan UMKM lokal**. Hak cipta konten dan branding milik tim Makjulo.

---

<div align="center">
  <p>Dibuat dengan 🍊 oleh Tim Makjulo — UNESA 2024</p>
</div>
