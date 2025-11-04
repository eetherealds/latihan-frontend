import React, { useEffect, useState } from "react";
import api from "../api/api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    description: ""
  });

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      const productList = Array.isArray(res.data?.data) ? res.data.data : [];
      setProducts(productList);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", form);
      setForm({ name: "", price: "", stock: "", description: "" });
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Gagal tambah produk");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus produk?")) return;
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Gagal hapus produk");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Produk</h1>

      {/* Form Tambah Produk */}
      <form onSubmit={handleSubmit} className="space-y-3 max-w-lg p-4 border rounded bg-white shadow">
        <h2 className="font-semibold">Tambah Produk</h2>

        <input
          className="w-full p-2 border rounded"
          placeholder="Nama produk"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Harga"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Stok"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          required
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Deskripsi"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Simpan Produk
        </button>
      </form>

      {/* Tabel Produk */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Nama</th>
              <th className="p-3 border">Harga</th>
              <th className="p-3 border">Stok</th>
              <th className="p-3 border">Deskripsi</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id} className="border-b">
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">Rp {p.price.toLocaleString()}</td>
                  <td className="p-2">{p.stock}</td>
                  <td className="p-2">{p.description}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-3">Belum ada produk</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
