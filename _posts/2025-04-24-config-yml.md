---
layout: post
title: "config yml"
---

# 📘 Panduan Lengkap: config.yml

##  Keterangan Dasar

File `config.yml` biasanya digunakan dalam berbagai proyek untuk menyimpan pengaturan dan konfigurasi. Contoh proyek yang menggunakan file ini termasuk:

- **Jekyll**
- **Netlify**
- **GitHub Actions**
- **Docker Compose**
- **CI/CD Tools**

### Struktur Dasar

- **Key**: Penanda atau atribut utama (contoh: `title`, `theme`)
- **Value**: Nilai yang diberikan untuk key tersebut
- Format: `key: value`
- **Indentasi sangat penting!** (menggunakan spasi, bukan tab)

---

## 📂 Contoh Struktur YAML

### 🔹 Contoh Konfigurasi Umum

```yml
title: Belajar YAML
description: Panduan pemula untuk memahami file .yml
author: Muhammad Zaky
theme: minima
```

###  Contoh Nested (Struktur Bertingkat)

```yml
user:
  name: Muhammad Zaky
  email: zaky@example.com
  social:
    github: zakygithub
```

### 🔹 Contoh List/Array dalam YAML

```yml
skills:
  - HTML
  - CSS
  - JavaScript
  - Python
  - Ruby
```

---

## ⚙️ Contoh `config.yml` dalam Proyek Jekyll

```yml
title: My Blog
description: Ini adalah blog pribadi saya.
author: Zaky
theme: minima

plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

social_links:
  github: https://github.com/zaky
```

###  Penjelasan

- `theme`: Tema yang digunakan (misalnya `minima`)
- `plugins`: List plugin yang digunakan dalam proyek Jekyll
- `social_links`: Contoh struktur nested untuk tautan sosial media

---

##  Saran Dalam Menggunakan YML 

- Gunakan **spasi** (bukan tab!) untuk indentasi
- Format `.yml` sangat **sensitif terhadap kesalahan format**
- Jika terjadi kesalahan parsing, periksa indentasi dan tanda baca
- Jangan ada karakter atau simbol aneh tanpa kutipan (`" "` atau `' '`)

---

## 🧾 Kesimpulan

File `.yml` adalah bagian penting dalam pengaturan proyek modern karena:

- Ringan dan mudah dibaca manusia
- Mendukung struktur data kompleks (nested, list, boolean)
- Sangat berguna dalam banyak ekosistem pengembangan seperti Jekyll, GitHub Actions, Docker, dan CI/CD pipeline

