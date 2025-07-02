---
layout: post
title: Koneksi Database Mysql Dengan PHP
---

# Koneksi Database MySQL dengan PHP

Menghubungkan PHP dengan MySQL adalah salah satu dasar dalam pengembangan web dinamis. PHP menyediakan fungsi bawaan untuk melakukan koneksi ke database MySQL, salah satunya menggunakan `mysqli`.

---

## 📌 Persiapan Awal

Sebelum melakukan koneksi:
- Pastikan server MySQL aktif (misalnya dengan XAMPP atau MAMP).
- Buat database dan tabel jika belum ada.
- Simpan skrip PHP di folder server lokal (misal: `htdocs` untuk XAMPP).

---

## 🔧 Struktur Koneksi Dasar (dengan `mysqli`)

```php
<?php
$host = "localhost";     // Server database
$user = "root";          // Username database
$password = "";          // Password database (kosong jika default XAMPP)
$database = "nama_db";   // Nama database

// Membuat koneksi
$koneksi = mysqli_connect($host, $user, $password, $database);

// Cek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
echo "Koneksi berhasil!";
?>
```

---

## ✅ Penjelasan Kode

| Bagian Kode     | Penjelasan |
|----------------|------------|
| `mysqli_connect()` | Fungsi untuk membuat koneksi ke database. |
| `die()` | Menghentikan eksekusi jika terjadi kesalahan dan menampilkan pesan. |
| `mysqli_connect_error()` | Mengembalikan pesan error terakhir saat koneksi gagal. |

---

## 📂 Contoh Struktur Proyek

```
/htdocs/
└── koneksi-db/
    ├── index.php
    └── koneksi.php
```

**Isi `koneksi.php`:**
```php
<?php
$koneksi = mysqli_connect("localhost", "root", "", "sekolah");

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
```

**Isi `index.php`:**
```php
<?php
include 'koneksi.php';

echo "Selamat datang! Koneksi berhasil.";
?>
```

---




