import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuratPengantarAktaKematian() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container md:px-8 px-5">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Layanan</p>
            <p className="text-lg text-black ml-2">
              &gt; Surat Pengantar Akta Kematian
            </p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Informasi Layanan
          </h1>
          <div className=" mt-12">
            <h1 className="font-semibold mb-2 text-center text-2xl">
              PEMBUATAN AKTA KEMATIAN
            </h1>
            <div className="text-lg">
              <ol className="list-decimal list-inside space-y-2">
                <li>Pengantar RT sesuai dengan domisili tempat tinggal</li>
                <li>Fotocopy KK dan KTP Pelapor</li>
                <li>Surat Pernyataan Kematian (apabila meninggal dirumah)</li>
                <li>
                  Fotocopy KK dan KTP Saksi 2 orang (1 orang dari pihak
                  keluarga, 1 orang tidak ada hubungan keluarga)
                </li>
                <li>Fotocopy KK dan KTP yang meninggal</li>
                <li>Mengisi Formulir Pelaporan Pencatatan Sipil</li>
              </ol>
              <ul className="list-none mt-6 font-semibold">
                <li className="flex items-center">
                  <span className="mr-2">*</span>Formulir Pelaporan Pencatatan
                  Sipil dapat di download disini
                </li>
                <li className="flex items-center">
                  <span className="mr-2">*</span>Formulir Pernyataan Kematian
                  dirumah dapat di download disini
                </li>
                <li className="flex items-center">
                  <span className="mr-2">*</span>Apabila meninggal di Rumah
                  Sakit dapat membawa persyaratan beserta Surat Keterangan
                  Kematian dari /Rumah Sakit/paramedis/Kepolisian langsung ke
                  Capil.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
