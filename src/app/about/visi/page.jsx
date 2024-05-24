import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Visi() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container px-5 md:px-8">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Tentang</p>
            <p className="text-lg text-black ml-2">&gt; Visi Misi</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Visi Misi Kelurahan
          </h1>
          <div className="px-0 md:px-24 mt-12 text-center">
            <h1 className="font-bold text-3xl">
              VISI MISI KELURAHAN TANJUNG TAHUN 2020-2024
            </h1>
            <h2 className="font-semibold my-2 text-2xl">
              VISI KELURAHAN TANJUNG
            </h2>
            <q className="text-xl">
              Tanjung Kota Air Tanjung, Berwawasan Lingkungan yang Cerdas dan
              Bermartabat
            </q>
            <h2 className="font-semibold text-2xl mt-2">
              MISI KELURAHAN TANJUNG
            </h2>
            <div className="text-left">
              <p className="text-base mt-4">
                Berdasarkan Visi tersebut maka telah disusun langkah-langkah
                strategis melalui 5 (lima) misi yaitu:
              </p>
              <p className="text-base mt-2">
                Mewujudkan kualitas sumber daya manusia yang sehat, cerdas dan
                berbudaya
              </p>
              <p className="text-base mt-2">
                Menciptakan infrastruktur perkotaan yang berkualita dan
                representative
              </p>
              <p className="text-base mt-2">
                Meningkatkan Kualitas pelayanan yang prima kepada masyarakat
                oleh aparatur yang berintegritas dan sejahterah dengan dukungan
                Teknologi Informasi
              </p>
              <p className="text-base mt-2">
                Menwujudkan masyarakat yang sejahtera, mandiri, kreatif, dan
                berdaya saing
              </p>
              <p className="text-base mt-2">
                Meningkatkan partisipasi masyarakat dalam mewujudkan kota yang
                bersih, hijau, aman, tertib, berwawasan lingkungan dan
                berkelanjutan
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
