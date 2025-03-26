---
layout: post
title: "HTML link dan List"
---


Penjelasan tentang link dan lists pada HTML.

![Html link dan list](/assets/image/images.jpg)


## **Mengenal HTML Link dan Lists**

 **link (tautan)** digunakan untuk menghubungkan halaman satu dengan yang lain, sedangkan **lists (daftar)** digunakan untuk menyusun informasi secara terstruktur. Kedua elemen ini sangat penting dalam pembuatan website yang interaktif dan mudah digunakan.

---

## **1. HTML Link (Tautan)**

### **Apa Itu Link dalam HTML?**
Link atau hyperlink dibuat menggunakan tag `<a>` (anchor) yang menghubungkan halaman web ke halaman lain atau ke sumber eksternal.

### **Contoh Link Dasar**
```html
<a href="https://www.example.com">Kunjungi Example</a>
```
**Penjelasan:**
- `<a>` digunakan untuk membuat link.
- `href="URL"` menentukan tujuan tautan.
- Teks di dalam `<a>` akan muncul sebagai link yang bisa diklik.

### **Jenis-Jenis Link dalam HTML**
1. **Link ke Halaman Lain (Eksternal)**
   ```html
   <a href="https://www.google.com">Buka Google</a>
   ```
2. **Link ke Halaman dalam Website (Internal)**
   ```html
   <a href="tentang-kami.html">Tentang Kami</a>
   ```
3. **Link ke Bagian dalam Halaman (Anchor Link)**
   ```html
   <a href="#section2">Lihat Bagian 2</a>
   ```
4. **Link ke Email (mailto)**
   ```html
   <a href="mailto:email@example.com">Kirim Email</a>
   ```
5. **Link untuk Download File**
   ```html
   <a href="dokumen.pdf" download>Unduh Dokumen</a>
   ```
6. **Membuka Link di Tab Baru**
   ```html
   <a href="https://www.example.com" target="_blank">Buka di Tab Baru</a>
   ```

---

## **2. HTML Lists (Daftar)**

### **Apa Itu Lists dalam HTML?**
Lists digunakan untuk menampilkan informasi dalam bentuk daftar. HTML memiliki tiga jenis utama:
1. **Ordered List (`<ol>`)** – Daftar berurutan (nomor atau huruf).
2. **Unordered List (`<ul>`)** – Daftar tidak berurutan (bullet point).
3. **Description List (`<dl>`)** – Daftar dengan deskripsi tambahan.

### **1. Ordered List (Daftar Berurutan)**
```html
<ol>
    <li>Pertama</li>
    <li>Kedua</li>
    <li>Ketiga</li>
</ol>
```
**Hasilnya:**
1. Pertama
2. Kedua
3. Ketiga

**Atribut pada Ordered List:**
- `type="A"` → Huruf besar (A, B, C, ...)
- `type="i"` → Angka Romawi kecil (i, ii, iii, ...)

### **2. Unordered List (Daftar Tidak Berurutan)**
```html
<ul>
    <li>Apel</li>
    <li>Pisang</li>
    <li>Jeruk</li>
</ul>
```
**Hasilnya:**
- Apel
- Pisang
- Jeruk

### **3. Description List (Daftar Deskripsi)**
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```
**Hasilnya:**
**HTML**  
  HyperText Markup Language  
**CSS**  
  Cascading Style Sheets  

---

