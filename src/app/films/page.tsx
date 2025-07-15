import { Film, ApiResponse } from '../types/film';
import Image from 'next/image';
import Link from 'next/link';

async function getFilm(): Promise<Film[]> {
  try {
    const res = await fetch('https://rinemaa.paramadina.ac.id/api/films/allFilm', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Gagal mengambil data film');
    }

    const apiResponse: ApiResponse = await res.json();
    return apiResponse.data;
  } catch (error) {
    console.error(error);
    // Kembalikan array kosong jika terjadi error agar halaman tidak rusak
    return [];
  }
}

export default async function FilmsPage() {
  const films = await getFilm();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Film</h1>

      {/* Tampilkan pesan jika tidak ada film */}
      {films.length === 0 && <p className="text-center text-gray-500">Tidak ada film yang ditemukan.</p>}

      {/* Tampilkan daftar film dalam bentuk grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {films.map((film) => (
          <Link href={`/films/${film.id}`} key={film.id} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
              <Image src={film.poster_url} alt={`Poster ${film.judul}`} width={290} height={426} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate group-hover:text-blue-600">{film.judul}</h2>
                <p className="text-sm text-gray-600">{new Date(film.tahun_rilis).getFullYear()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
