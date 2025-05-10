---
layout: post
title: Confiq YML
---

# Apa Itu File YML?

**YML**, atau **YAML** (*YAML Ain’t Markup Language*), adalah format file konfigurasi yang digunakan untuk menyimpan data dalam bentuk terstruktur yang mudah dibaca manusia.

Format ini sering digunakan dalam pengaturan konfigurasi aplikasi, pipeline deployment, hingga pengembangan web dengan framework seperti **Jekyll**, **Docker**, dan lainnya.

---

## Karakteristik Utama Format YML

- Menggunakan **indentasi spasi**, bukan tab
- Tidak memakai tanda kurung seperti `{}` atau `[]`
- Gunakan tanda titik dua `:` untuk memisahkan *key* dan *value*
- Mendukung struktur data seperti:
  - List / Array
  - Object / Map
  - Nested (bertingkat)

---

## Contoh Konfigurasi YML Sederhana

```yml
title: My Blog
description: Belajar Web Development
author: Zaky
theme: minima

### Keterangan

- `title`, `description`, `author`, dan `theme` adalah **key**
- Nilai setelah tanda `:` adalah **value**

---

### Contoh Nested (Struktur Bertingkat)

```yml
user:
  name: Muhammad Zaky
  email: Muhammadzaky@example.com

---

### Contoh List/Array dalam YML

```yml
skills:
  - HTML
  - CSS
  - JavaScript
  - Python

---

### ✅ Kesimpulan

- File `.yml` adalah bagian penting dalam pengaturan konfigurasi banyak proyek modern.
- Format ini ringan, mudah dibaca, namun **sensitif terhadap indentasi**.
- Memahami YAML sangat membantu saat bekerja dengan:
  - **Jekyll**
  - **GitHub Actions**
  - **Netlify**
  - **Docker**
  - **CI/CD tools** lainnya

  ---
