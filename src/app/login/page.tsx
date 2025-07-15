'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc'; // Import ikon Google dari react-icons

export default function LoginPage() {
  return (
    // Background yang lebih modern: subtle gradient dan dark mode support
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      {/* Container utama untuk card, dengan shadow yang lebih baik */}
      <div className="relative z-10 p-8 sm:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-md w-full text-center">
        {/* Judul */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Selamat Datang</h1>
        {/* Sub-pesan */}
        <p className="mb-8 text-base text-gray-600 dark:text-gray-300">Untuk melanjutkan, silakan login dengan akun Google Anda.</p>

        {/* Tombol Login Google */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          <FcGoogle className="w-6 h-6" /> {/* Ikon Google */}
          <span>Lanjutkan dengan Google</span>
        </button>

        {/* Opsional: Teks kecil di bawah (misal untuk terms & conditions) */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan kami.</p>
      </div>

      {/* Opsional: Elemen background abstrak untuk sentuhan modern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
