import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

/*
 Props:
 - show, onHide
 - onSave(form) -> function to call when saving
 - initial (optional) -> initial form values
 - title (optional)
*/
function FormModal({ show, onHide, onSave, initial = null, title = 'Form Produk' }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initial) {
      setForm({
        name: initial.name || '',
        price: initial.price != null ? String(initial.price) : '',
        stock: initial.stock != null ? String(initial.stock) : '',
        description: initial.description || '',
      });
    } else {
      setForm({ name: '', price: '', stock: '', description: '' });
    }
    setErrors({});
  }, [initial, show]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Nama produk wajib diisi';
    if (!form.price.trim() || isNaN(Number(form.price))) e.price = 'Harga harus angka';
    if (!form.stock.trim() || !Number.isInteger(Number(form.stock))) e.stock = 'Stok harus integer';
    return e;
  };

  const handleSave = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      onSave({
        name: form.name.trim(),
        price: Number(form.price),
        stock: Number(form.stock),
        description: form.description.trim(),
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stok</Form.Label>
            <Form.Control
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              isInvalid={!!errors.stock}
            />
            <Form.Control.Feedback type="invalid">{errors.stock}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Batal</Button>
        <Button variant="primary" onClick={handleSave}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;