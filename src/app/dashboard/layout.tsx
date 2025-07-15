import React from 'react';

export default function DashboardLayout({
  children, // 'children' akan menjadi 'page.tsx' atau layout lainnya
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      {/* Sidebar khusus untuk dashboard */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard">Home</a>
            </li>
            <li className="mb-2">
              <a href="/dashboard/settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Konten halaman akan dirender di sini */}
      <main className="flex-1 p-6">{children}</main>
    </section>
  );
}
