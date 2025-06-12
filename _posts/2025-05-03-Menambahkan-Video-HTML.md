---
layout: post
title: "Menambahkan Video di HTML"
---

##  Menambahkan Video ke Halaman Web dengan HTML

###  Kenapa Perlu Menambahkan Video?

Menambahkan elemen video ke dalam situs web bisa membuat konten kamu lebih hidup, menarik perhatian pengunjung, dan menyampaikan informasi secara visual. Cocok untuk tutorial, promosi produk, atau portofolio.

---

###  Tag Dasar: `<video>`

HTML menyediakan tag `<video>` untuk menyisipkan media video langsung ke halaman web.

Contoh dasar:

```html
<video width="640" height="360" controls>
  <source src="assets/video/Cineamtic Supra MK4.mp4" type="video/mp4">
  Browser kamu tidak mendukung tag video.
</video>
```

Penjelasan:
- `width` dan `height`: mengatur ukuran video.
- `controls`: menampilkan tombol play, pause, volume, dsb.
- `<source>`: lokasi dan format file video.
- Teks di antara tag `<video>` berguna jika browser tidak mendukung video.

---

###  Atribut Tambahan

| Atribut     | Fungsi                                                                 |
|-------------|------------------------------------------------------------------------|
| `autoplay`  | Memutar video otomatis saat halaman dibuka                            |
| `muted`     | Mematikan suara secara default (biasanya dipakai bersama autoplay)    |
| `loop`      | Memutar video berulang tanpa henti                                     |
| `poster`    | Menampilkan gambar preview sebelum video diputar                       |
| `preload`   | Mengontrol bagaimana browser memuat video sebelum diputar              |

Contoh:

```html
<video width="100%" controls autoplay muted loop poster="thumbnail.jpg">
  <source src="teaser.mp4" type="video/mp4">
</video>
```

---

###  Tips Praktis

- Gunakan format `.mp4` untuk kompatibilitas terbaik.
- Sertakan lebih dari satu format video jika perlu (misalnya `.webm`, `.ogg`).
- Perhatikan ukuran file — video yang besar bisa memperlambat halaman.

---

###  Embed Video dari YouTube

jika tidak ingin menyimpan file video sendiri, bisa ambil dari YouTube:

```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen>
</iframe>
```

Ganti `VIDEO_ID` dengan ID video YouTube yang ingin ditampilkan.

---

###  Kesimpulan

Menambahkan video ke HTML itu mudah dan powerful. Kamu bisa pakai:
- Tag `<video>` untuk video lokal
- `<iframe>` untuk YouTube
- Atur atribut sesuai kebutuhan agar video tampil optimal
