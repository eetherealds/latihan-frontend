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
<img width="1920" height="1008" alt="Screenshot 2025-11-04 202108" src="https://github.com/user-attachments/assets/e81229eb-f084-49c2-8b26-c5bc4ee713e2" />

#### Login (Salaj Password/Email)

<img width="1920" height="1008" alt="Screenshot 2025-11-04 202124" src="https://github.com/user-attachments/assets/42a3e93f-9ba2-4a19-bc7e-57a5d067f9f3" />

#### Berhasil Login

<img width="1920" height="1008" alt="Screenshot 2025-11-04 191857" src="https://github.com/user-attachments/assets/c38124a9-7ad2-4847-9296-beebeaf5e1e4" />

# 6. Dashboard

#### Sebelum Menambahkan Data
<img width="1920" height="1008" alt="Screenshot 2025-11-04 195343" src="https://github.com/user-attachments/assets/3ea6b4e7-c90d-45e0-b27a-3d10fba7e9b2" />

### Sesudah Menambahkan Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 200935" src="https://github.com/user-attachments/assets/81bee612-f879-40d7-bf9b-a19c4b1ebb07" />

# 7. Check Data Postman & PostgreSQL

#### Postman (GET Products)

<img width="1920" height="1008" alt="Screenshot 2025-11-04 200947" src="https://github.com/user-attachments/assets/c15da1b8-fe02-4d8b-9aa1-7fd5fe73d732" />

#### PostgreSQL

<img width="1900" height="997" alt="Screenshot 2025-11-04 200957" src="https://github.com/user-attachments/assets/b5acf0d3-0398-464c-9ff8-6be3dab03829" />

# 8. Hapus Data

<img width="1920" height="1008" alt="Screenshot 2025-11-04 200134" src="https://github.com/user-attachments/assets/e0c6edca-cd8a-49eb-b71d-1873ba5abb8a" />
