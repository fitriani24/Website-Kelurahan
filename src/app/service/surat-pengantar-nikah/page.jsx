import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuratPengantarNikah() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container md:px-8 px-5">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Layanan</p>
            <p className="text-lg text-black ml-2">
              &gt; Surat Pengantar Nikah
            </p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Informasi Layanan
          </h1>
        </div>
        <Footer />
      </div>
    </main>
  );
}
