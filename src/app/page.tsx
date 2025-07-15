import { getServerSession } from 'next-auth/next';
// Pastikan untuk mengimpor handler otentikasi yang kamu buat
// import { authOptions } from "./api/auth/[...nextauth]/route"
// (Nama variabel bisa berbeda tergantung implementasimu)

export default async function HomePage() {
  // const session = await getServerSession(authOptions);
  const session = await getServerSession(); // Cara lebih sederhana jika konfigurasimu standar

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Selamat Datang di Aplikasi Saya</h1>
      <div className="mt-4">
        {session ? (
          <div className="text-center">
            <p>Anda login sebagai, {session.user?.name}!</p>
            <p>Email: {session.user?.email}</p>
            <a href="/api/auth/signout" className="text-red-500 hover:underline mt-2 inline-block">
              Logout
            </a>
          </div>
        ) : (
          <div className="text-center">
            <p>Anda belum login.</p>
            <a href="/api/auth/signin" className="text-blue-500 hover:underline mt-2 inline-block">
              Login
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
