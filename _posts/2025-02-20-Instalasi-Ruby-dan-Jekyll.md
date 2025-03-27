---
layout: post
title: Instalasi Ruby dan Jekyll
---

penjelasan Instalasi Ruby dan Jekyll

## **Cara Instalasi Ruby dan Jekyll di Windows**

Jekyll adalah generator situs statis berbasis Ruby yang banyak digunakan untuk membuat blog atau dokumentasi. Berikut adalah panduan langkah demi langkah untuk menginstal **Ruby** dan **Jekyll** di Windows.

---

## **1. Instalasi Ruby**

### **Langkah 1: Unduh Ruby Installer**
- Kunjungi [https://rubyinstaller.org/](https://rubyinstaller.org/)
- Unduh **Ruby+Devkit** versi terbaru (disarankan versi **3.x**).

### **Langkah 2: Instal Ruby**
- Jalankan file `.exe` yang telah diunduh.
- Pilih opsi **“Add Ruby executables to your PATH”** agar Ruby dapat dikenali di Command Prompt.
- Setelah instalasi selesai, pilih opsi **"Run ridk install"** untuk menginstal tambahan Devkit.

### **Langkah 3: Verifikasi Instalasi Ruby**
Buka **Command Prompt (cmd)** dan jalankan perintah berikut:
```sh
ruby -v
```
Jika berhasil, akan muncul versi Ruby seperti:
```
ruby 3.2.2p53 (2023-03-01 revision 12345) [x64-mingw32]
```

---

## **2. Instalasi Jekyll**

### **Langkah 1: Instal Bundler dan Jekyll**
Setelah Ruby terinstal, jalankan perintah berikut di **Command Prompt**:
```sh
gem install jekyll bundler
```

### **Langkah 2: Verifikasi Instalasi Jekyll**
```sh
jekyll -v
```
Jika berhasil, akan muncul versi Jekyll, misalnya:
```
Jekyll 4.3.2
```

---

## **3. Membuat dan Menjalankan Proyek Jekyll**

Setelah Jekyll berhasil diinstal, kita bisa membuat proyek blog baru dengan Jekyll.

### **Langkah 1: Buat Proyek Jekyll Baru**
```sh
jekyll new myblog
```

### **Langkah 2: Masuk ke Folder Proyek**
```sh
cd myblog
```

### **Langkah 3: Jalankan Jekyll**
```sh
bundle exec jekyll serve
```

Jika berhasil, Anda akan melihat output seperti ini:
```
Server address: http://127.0.0.1:4000/
```
Buka browser dan akses **http://localhost:4000** untuk melihat blog yang telah dibuat.

---
## **konfigurasi Jekyll dengan GitHub Pages**

Berikut adalah panduan untuk membuat Personal Web menggunakan Jekyll dan GitHub Pages:

### 1. Membuat Repository GitHub

Untuk meng-host situs Jekyll menggunakan GitHub Pages, kamu perlu membuat repository di GitHub. Ikuti langkah-langkah ini:

1. *Buat Repository Baru di GitHub*:
   - Masuk ke [GitHub](https://github.com/).
   - Klik tombol *New* untuk membuat repository baru.
   - Beri nama repository dengan format username.github.io, misalnya MuhZakyyy.github.io Ini adalah nama domain untuk situsmu.
   - Pilih *public* dan jangan centang opsi untuk menambahkan README.
   - Klik *Create repository*.

2. *Salin URL Repository*:
   Salin URL repository GitHub kamu, misalnya:
   
   https://github.com/username/username.github.io
   

### 2. Membuat Situs Jekyll Baru

Setelah repository GitHub dibuat, langkah berikutnya adalah membuat situs Jekyll secara lokal di komputer kamu.

1. *Buat Situs Jekyll Baru*:
   Di terminal/command prompt, jalankan perintah berikut untuk membuat situs Jekyll baru:
   
   jekyll new nama-repository
   
   Gantilah nama-repository dengan nama yang sesuai. Pastikan folder situsmu sesuai dengan nama repository GitHub kamu nanti.

2. *Pindah ke Direktori Situs*:
   Masuk ke folder situs Jekyll yang baru saja dibuat:
   
   cd nama-repository
   

3. *Verifikasi Situs Secara Lokal*:
   Jalankan situs secara lokal dengan perintah:
   
   bundle exec jekyll serve
   
   Situs akan berjalan di http://localhost:4000. Buka di browser untuk memastikan situs bisa ditampilkan.

### 3. Menyambungkan Repository GitHub

Sekarang, kita akan menyambungkan situs Jekyll yang baru dibuat ke repository GitHub agar bisa di-hosting di GitHub Pages.

1. *Inisialisasi Git di Direktori Situs*:
   Jika belum, inisialisasi Git di folder situs Jekyll:
   
   git init
   

2. *Hubungkan Repository GitHub*:
   Menambahkan repository GitHub yang baru kamu buat sebagai remote:
   
   git remote add origin https://github.com/username/username.github.io.git
   

3. *Menambahkan dan Meng-commit File*:
   Tambahkan semua file ke staging area dan commit perubahan:
   
   git add .
   git commit -m "Initial commit"
   

4. *Push ke GitHub*:
   Kirimkan file yang sudah di-commit ke GitHub:
   
   git push -u origin main
   
   Jika kamu menggunakan branch master, gunakan perintah ini:
   
   git push -u origin master
   

### 4. Mengaktifkan GitHub Pages

Sekarang GitHub Pages harus diaktifkan untuk repository kamu.

1. *Masuk ke Pengaturan Repository di GitHub*:
   - Buka halaman repository kamu di GitHub.
   - Klik tab *Settings* di bagian atas halaman.

2. *Aktifkan GitHub Pages*:
   - Di menu *Pages* (bagian bawah kiri), pilih *Source* dan pilih *main branch* (atau master jika kamu menggunakan branch itu).
   - Klik *Save*.

3. *Selesai!*:
   GitHub akan memproses dan meng-host situs Jekyll kamu. Biasanya, situs akan tersedia di:
   
   https://username.github.io
   

### 5. Menyesuaikan Situs Jekyll

Sekarang situs kamu sudah aktif, kamu bisa menyesuaikan situs dengan mengedit beberapa file.

1. *Konfigurasi _config.yml*:
   Buka file _config.yml dan sesuaikan pengaturan situsmu, seperti nama, deskripsi, dan URL:
   yaml
   title: My Personal Web
   description: This is my personal website hosted on GitHub Pages.
   url: "https://username.github.io"
   baseurl: ""
   

2. *Menambahkan Postingan Blog atau Halaman Statis*:
   - Untuk menambahkan postingan blog, buat file Markdown di folder _posts dengan format nama YYYY-MM-DD-nama-post.md.
   - Untuk halaman statis seperti "Tentang Saya" atau "Kontak", buat file .md di direktori root situs, misalnya about.md.

3. *Menambahkan Tema Jekyll*:
   Kamu bisa memilih tema dari [Jekyll Themes](https://jekyllrb.com/docs/themes/), lalu menambahkannya ke file _config.yml. Contoh:
   yaml
   theme: jekyll-theme-cayman
   

4. *Menambahkan Custom CSS dan JavaScript*:
   Kamu juga bisa menambahkan file CSS atau JavaScript untuk memperindah tampilan situs di folder assets/css dan assets/js.

### 6. Update Situs dan Push ke GitHub

Setelah melakukan perubahan pada situs, seperti menambahkan postingan atau mengubah tema, kamu bisa memperbarui situs di GitHub.

1. *Tambah dan Commit Perubahan*:
   Setelah melakukan perubahan, jalankan perintah:
   
   git add .
   git commit -m "Update site content"
   

2. *Push Perubahan ke GitHub*:
   Kirimkan perubahan yang baru saja di-commit ke GitHub:
   
   git push origin main