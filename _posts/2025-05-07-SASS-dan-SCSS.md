---
layout: post
title: Materi SASS dan SCSS
---

# Materi: SASS dan SCSS

## 1. Pendahuluan

**SASS (Syntactically Awesome Stylesheets)** adalah sebuah *CSS preprocessor* yang memungkinkan kita menulis CSS dengan sintaks yang lebih kuat, efisien, dan terstruktur. Dengan menggunakan SASS, kita bisa menambahkan fitur seperti:

- **Variabel**
- **Nesting** (penulisan kode bersarang)
- **Partials** dan **import**
- **Mixins**
- **Inheritance**
- **Fungsi custom**

SASS membantu memecah file CSS menjadi bagian-bagian kecil dan reusable. Hal ini sangat berguna dalam pengembangan front-end skala besar.

---

## 2. Perbedaan antara SASS dan SCSS

SASS memiliki dua gaya sintaks: **SASS (indented syntax)** dan **SCSS (Sassy CSS)**. Keduanya memiliki fungsi yang sama tetapi cara penulisannya berbeda.

| Fitur           | SASS                          | SCSS                           |
|------------------|-------------------------------|--------------------------------|
| Ekstensi File     | `.sass`                        | `.scss`                         |
| Gaya Penulisan    | Tanpa `{}` dan `;`              | Menggunakan `{}` dan `;`         |
| Mirip dengan      | Python atau YAML                | CSS standar                     |
| Ketersediaan      | Kurang umum                    | Lebih umum digunakan            |
| Kompatibilitas    | Tidak langsung kompatibel CSS  | Kompatibel penuh dengan CSS     |

---

## 3. Contoh Penulisan Kode

### Contoh SASS:
```sass
$primary-color: #333

body
  font: 100% Helvetica, sans-serif
  color: $primary-color
```

### Contoh SCSS:
```scss
$primary-color: #333;

body {
  font: 100% Helvetica, sans-serif;
  color: $primary-color;
}
```

---

## 4. Fitur Unggulan

###  Variabel
Menyimpan nilai warna, ukuran font, atau padding agar dapat digunakan berulang.

```scss
$main-color: #0d6efd;
$spacing: 16px;

button {
  background-color: $main-color;
  padding: $spacing;
}
```

###  Nesting
Menulis CSS yang merefleksikan struktur HTML secara hierarki.

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
    }
  }
}
```

###  Partials dan Import
Memecah file SCSS menjadi bagian kecil dan di-*import* ke file utama.

```scss
// _variables.scss
$base-color: #000;

// main.scss
@import 'variables';
```

###  Mixins
Fungsi untuk menulis blok CSS yang bisa digunakan kembali.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box { @include border-radius(10px); }
```

###  Inheritance (Extend)
Menghindari pengulangan deklarasi CSS.

```scss
%message {
  padding: 10px;
  border: 1px solid #ccc;
}

.success {
  @extend %message;
  border-color: green;
}
```

---

## 5. Alur Kerja dengan SASS/SCSS

1. Instalasi SASS:
   ```bash
   npm install -g sass
   ```

2. Kompilasi SCSS ke CSS:
   ```bash
   sass style.scss style.css
   ```

3. Gunakan file CSS hasil kompilasi di dalam HTML.

---


## 6. Kesimpulan

SASS/SCSS memberikan banyak kemudahan dalam pengembangan CSS, terutama untuk proyek besar dengan banyak elemen gaya.  
Keuntungan menggunakan SASS/SCSS antara lain:

- Penulisan kode yang lebih modular dan reusable.
- Meminimalisir pengulangan.
- Meningkatkan keterbacaan dan maintainability.
- Kompatibel dengan CSS, terutama SCSS.
