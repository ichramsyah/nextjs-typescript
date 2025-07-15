export interface Genre {
  id: number;
  nama: string;
}

export interface Film {
  id: number;
  judul: string;
  produser: string;
  sutradara: string;
  penulis: string;
  produksi: string;
  pemeran: string;
  tahun_rilis: string;
  durasi: number;
  usia: string;
  poster_url: string;
  trailer_url: string;
  sinopsis: string;
  created_at: string;
  updated_at: string;
  genres: Genre[];
  average_rating: number;
  ratings_count: number;
}

// Tipe untuk keseluruhan respons dari API
export interface ApiResponse {
  data: Film[];
}

// sturktur api seperti ini:

// {
//   "data": [
//     {
//       "id": 1,
//       "judul": "Pabrik Gula Uncut",
//       "produser": "Manoj Punjabi",
//       "sutradara": "Awi Suryadi",
//       "penulis": "Lele Laila",
//       "produksi": "MD Pictures",
//       "pemeran": "Arbani Yasiz, Ersya Aurelia, Erika Carlina, Bukie B. Mansyur, Wavi Zihan, Moch. Arif Alfiansyah, Benidictus Siregar, Sadana Agung, Yono Bakrie, Vonny Anggraini, Budi Ros, Dewi Pakis, Azela Putri",
//       "tahun_rilis": "2025-04-17",
//       "durasi": 133,
//       "usia": "21+",
//       "poster_url": "https://media.21cineplex.com/webcontent/gallery/pictures/174166356263054_290x426.jpg",
//       "trailer_url": "https://www.youtube.com/embed/Uvp2ZBK7Vnc?si=ovO2Q8Me_qXX_7Kz",
//       "sinopsis": "Endah (Ersya Aurelia), Fadhil (Arbani Yasiz), Dwi (Moch. Arif Alfiansyah), Hendra (Bukie B. Mansyur), Wati (Wavi Zihan), Ningsih (Erika Carlina), dan Franky (Benidictus Siregar) berangkat bersama puluhan orang lainnya ke sebuah pabrik gula untuk menjadi buruh musiman. Setiap tahun pabrik gula mempekerjakan orang-orang dari desa sekitar untuk mempercepat proses penggilingan tebu di musim panen. Awalnya semua berjalan wajar tanpa keanehan, sampai suatu malam, Endah terbangun dan keluar dari mes/loji tempatnya menginap demi membuntuti sosok misterius. Sejak kejadian malam itu, para buruh mulai mengalami teror yang terus meningkat, mulai dari kecelakaan kerja yang menimpa salah satu dari mereka, sampai tewasnya seorang buruh secara mengenaskan di sumur belakang. Kemudian terungkap bahwa pabrik tersebut berdampingan dengan kerajaan demit, sesuatu telah membuat para demit marah sehingga sekarang mereka menuntut nyawa para buruh.",
//       "created_at": "2025-04-17 23:43:57",
//       "updated_at": "2025-04-17 23:43:57",
//       "genres": [
//         {
//           "id": 1,
//           "nama": "Horror"
//         }
//       ],
//       "average_rating": 8.2,
//       "ratings_count": 3
//     },
//     {
//       "id": 2,
//       "judul": "Qodrat 2",
//       "produser": "Linda Gozali",
//       "sutradara": "Charles Gozali",
//       "penulis": "Asaf Antariksa, Gea Rexy, Charles Gozali",
//       "produksi": "Magma Entertainment, Rapi Films",
//       "pemeran": "Vino G. Bastian, Acha Septriasa, Della Dartyan, Donny Alamsyah, Jason Bangun",
//       "tahun_rilis": "2025-04-17",
//       "durasi": 115,
//       "usia": "13+",
//       "poster_url": "https://media.21cineplex.com/webcontent/gallery/pictures/174097486549169_287x421.jpg",
//       "trailer_url": "https://www.youtube.com/embed/R5oapQZW8Ao?si=aW-XMpgZj8aO8iBv",
//       "sinopsis": "Setelah pertempuran melawan Assuala, Qodrat (Vino G. Bastian) melanjutkan perjalanannya mencari Azizah (Acha Septriasa), istrinya yang ternyata menderita depresi karena menjual dirinya pada Assuala demi menyelamatkan Alif (Jason Bangun). Sempat dirawat di Rumah Sakit Jiwa, Azizah ternyata sudah keluar dan bekerja di sebuah pabrik pemintalan yang justru tengah dirundung masalah atas serangkaian kematian misterius yang terjadi pada para pekerjanya, akibat ritual iblis yang dilakukan pemilik pabrik demi sebuah tindak pesugihan. Mengetahui hal ini, Qodrat pun berusaha menyelamatkan Azizah dengan segala cara, apalagi ketika semua teror ini memuncak ke sebuah serangan kesurupan massal di mana iblis sekali lagi siap untuk menyerang, menunggu Qodrat takluk ke perangkap mereka.",
//       "created_at": "2025-04-17 23:45:46",
//       "updated_at": "2025-04-17 23:45:46",
//       "genres": [
//         {
//           "id": 1,
//           "nama": "Horror"
//         },
//         {
//           "id": 2,
//           "nama": "Action"
//         }
//       ],
//       "average_rating": 7.2,
//       "ratings_count": 7
//     },
