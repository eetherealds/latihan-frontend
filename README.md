# 1. Buat Struktur Folder

<img width="239" height="522" alt="image" src="https://github.com/user-attachments/assets/9d3f794c-fe6d-4b5e-ab35-96504958e91c" />

# 2. Set Up Backend
- Backend menggunakan Node.js, Express, dan JWT.
- Backend diambil dari `user-management-api`
- Key JWT disimpan di folder backend dan akan digunakan untuk autentikasi setiap request dari frontend.
- Jalankan backend dengan `npm start`, localhost akan berjalan di `:5000`.

# 3. Set Up Frontend
- Jalankan frontend dengan `npm start`, localhost akan berjalan di `:3000`.

## Integrasi dengan Backend
File koneksi API berada di api.js, di file ini program memastikan setiap request ke backend menyertakan JWT token yang dibaca dari localStorage.

# 4. CRUD dengan Modal (React Boostrap)
Setiap aksi seperti tambah, edit, atau hapus data user dilakukan dalam modal.

<img width="935" height="386" alt="image" src="https://github.com/user-attachments/assets/7ac1d365-7c79-4ad3-8b12-639168e1a895" />

# 5. Validasi Login & Register

#### Gagal Register (User Sudah Ada)

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223509" src="https://github.com/user-attachments/assets/17be1bec-0ec5-4235-970b-838cd3691e1e" />

#### Login (Salah Password/Email)

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223442" src="https://github.com/user-attachments/assets/7bad53d2-62b5-4e9e-8a53-61163dd9f0e5" />

#### Berhasil Login

<img width="1920" height="1008" alt="Screenshot 2025-11-04 191857" src="https://github.com/user-attachments/assets/c38124a9-7ad2-4847-9296-beebeaf5e1e4" />

# 6. Dashboard

#### Sebelum Menambahkan Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223137" src="https://github.com/user-attachments/assets/110a71cd-064f-47f0-b3d1-3075b9f6c5b3" />

### Sesudah Menambahkan Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223619" src="https://github.com/user-attachments/assets/13f86f08-a77d-4467-9400-36fcc9c4f37b" />

# 7. Check Data Postman & PostgreSQL

#### Postman (GET Products)

<img width="1272" height="743" alt="image" src="https://github.com/user-attachments/assets/1be85010-7654-400a-996a-6b52e52e8324" />

#### PostgreSQL

<img width="805" height="450" alt="Screenshot 2025-11-04 224347" src="https://github.com/user-attachments/assets/bc9503ec-db0e-4408-bfd8-c99378a25697" />

# 8. Hapus Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223129" src="https://github.com/user-attachments/assets/9bf906a2-8ef2-4c6c-b81e-6764f80366c8" />

# 9. Update Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 223630" src="https://github.com/user-attachments/assets/1302a733-7636-4a48-8f01-a03a2c4d0fd9" />

