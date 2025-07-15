import { Film } from '@/app/types/film';
import Image from 'next/image';
import { notFound } from 'next/navigation'; // Untuk menampilkan 404 jika film tidak ada

// Tipe untuk respons API detail (asumsi data film tunggal ada di dalam 'data')
interface ApiDetailResponse {
  data: Film;
}

// --- Fungsi untuk mengambil data satu film ---
async function getFilmDetail(id: string): Promise<Film | null> {
  try {
    // Asumsi endpoint detail adalah seperti ini, mohon disesuaikan jika berbeda
    const res = await fetch(`https://rinemaa.paramadina.ac.id/api/films/${id}`, {
      next: { revalidate: 3600 }, // Cache data selama 1 jam
    });

    if (!res.ok) {
      return null; // Kembalikan null jika film tidak ditemukan (menyebabkan 404)
    }

    const apiResponse: ApiDetailResponse = await res.json();
    return apiResponse.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// --- Komponen Halaman Detail ---
// Perhatikan { params }: ini cara kita mendapatkan nilai dari segmen dinamis
export default async function FilmDetailPage({ params }: { params: { id: string } }) {
  const film = await getFilmDetail(params.id);

  // Jika getFilmDetail mengembalikan null, tampilkan halaman 404
  if (!film) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image src={film.poster_url} alt={`Poster ${film.judul}`} width={500} height={750} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{film.judul}</h1>
          <p className="text-lg text-gray-500 mb-4">
            {new Date(film.tahun_rilis).getFullYear()} | {film.durasi} menit | {film.usia}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {film.genres.map((genre) => (
              <span key={genre.id} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {genre.nama}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-2">Sinopsis</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">{film.sinopsis}</p>

          <h3 className="font-semibold">
            Sutradara: <span className="font-normal">{film.sutradara}</span>
          </h3>
          <h3 className="font-semibold">
            Pemeran: <span className="font-normal">{film.pemeran}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
