---
layout: post
title: "Belajar config yml"
---

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