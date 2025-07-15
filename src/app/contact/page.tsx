'use client'; // <-- Tandai sebagai Client Component

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  // State untuk menyimpan nilai dari setiap input
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // Untuk menampilkan pesan status

  // Fungsi yang dijalankan saat form disubmit
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Mencegah reload halaman
    setStatus('Mengirim...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Terjadi kesalahan.');
      }

      // Jika sukses
      setStatus(result.message);
      setName(''); // Kosongkan form
      setMessage('');
    } catch (error: any) {
      // Jika gagal
      setStatus(error.message);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hubungi Kami</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <div>
          <label htmlFor="name">Nama</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="message">Pesan</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full p-2 border rounded" rows={4} />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Kirim
        </button>
      </form>
      {/* Tampilkan pesan status */}
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
