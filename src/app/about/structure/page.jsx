import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Structure() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container px-5 md:px-8">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg ">Beranda &gt; Tentang</p>
            <p className="text-lg text-black ml-2">&gt; Struktur Organisasi</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            Struktur Organisasi Kelurahan
          </h1>
          <div className="px-0 md:px-24 mt-12">
            <Image
              src={"/struktur.png"}
              className="w-full"
              width={100}
              height={100}
              alt="Struktur Organisasi"
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
