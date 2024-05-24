import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container md:px-8 px-5">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Tentang</p>
            <p className="text-lg text-black ml-2">&gt; Profile</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Profil Kelurahan
          </h1>
          <div className="md:px-24 mt-12">
            <h1 className="font-semibold text-center text-3xl">
              PROFIL KELURAHAN TANJUNG - TASIKMALAYA
            </h1>
            <p className="text-base mt-4">
              Kelurahan Tanjung adalah Kelurahan yang berada di Kecamatan
              Kelurahan Tanjung terdiri dari 40 Rukun Tetangga (RT) dan 11 Rukun
              Warga (RW). Kantor Lurah Tanjung berada di Jl. Tanjung Kelurahan
              Tanjung memiliki Luas Wilayah 0,84 Ha/Km dengan jumlah penduduk
              &plusmn; 9.300 Jiwa dan 2.918 KK.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
