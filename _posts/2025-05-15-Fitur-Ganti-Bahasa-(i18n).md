---
layout: post
title: "Fitur Ganti Bahasa (i18n) dalam Web"
---

## 📘 Apa itu i18n?

**i18n** adalah singkatan dari *internationalization* (terdiri dari 18 huruf antara 'i' dan 'n'), yaitu proses mendesain software agar mudah disesuaikan dengan berbagai bahasa dan wilayah tanpa harus mengubah source code.

Tujuannya adalah membuat aplikasi atau situs web dapat diakses oleh pengguna dari berbagai negara dan budaya.

---

##  i18n vs l10n

| Istilah | Penjelasan |
|--------|------------|
| **i18n** (*internationalization*) | Menyiapkan sistem agar bisa diterjemahkan |
| **l10n** (*localization*) | Proses menerjemahkan dan menyesuaikan konten berdasarkan budaya lokal |

---

##  Fitur Umum i18n

- Pemilihan bahasa otomatis berdasarkan pengaturan browser
- Switcher bahasa manual (dropdown/flag)
- File terpisah untuk tiap bahasa (misal: `en.yml`, `id.yml`, `fr.yml`)
- Dukungan tanggal/waktu lokal
- Format angka/mata uang lokal

---

##  Contoh Struktur File Bahasa

```yml
# en.yml
home:
  title: "Welcome to Our Website"
  description: "We provide the best services."

# id.yml
home:
  title: "Selamat Datang di Situs Kami"
  description: "Kami menyediakan layanan terbaik."
```

---

##  Cara Kerja (Konsep Umum)

1. Sistem membaca bahasa dari browser atau pengaturan pengguna
2. Sistem memilih file bahasa yang sesuai (misal `id.yml`)
3. Halaman ditampilkan dengan teks yang diterjemahkan

---

##  i18n dalam Framework

- **Jekyll**: Gunakan plugin seperti `jekyll-multiple-languages-plugin`
- **React**: Gunakan library seperti `react-i18next`
- **Vue**: Gunakan `vue-i18n`
- **Next.js**: Dukungan i18n bawaan di `next.config.js`

---

##  Kesimpulan

Fitur i18n membuat website lebih inklusif dan profesional.

