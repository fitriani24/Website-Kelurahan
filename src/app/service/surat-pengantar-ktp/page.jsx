import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuratPengantarKtp() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container md:px-8 px-5">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Layanan</p>
            <p className="text-lg text-black ml-2">&gt; Surat Pengantar Ktp</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Informasi Layanan
          </h1>
          <div className=" mt-12">
            <h1 className="font-semibold mb-2 text-center text-2xl">
              PEMBUATAN KTP
            </h1>
            <div className="text-lg">
              <ol className="list-decimal list-inside space-y-2">
                <li>Pengantar RT diketahui RW</li>
                <li>Fotocopy KK</li>
                <li>
                  Berusia 17 tahun/pernah menikah jika berusia di bawah 17 tahun
                  (permohonan baru)
                </li>
                <li>Membawa KTP Lama (yang asli), jika perpanjangan</li>
                <li>Surat Ket. Kehilangan dari Kepolisian, jika hilang</li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
