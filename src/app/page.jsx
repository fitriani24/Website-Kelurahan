import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BeritaCardContainer from "@/components/BeritaCardContainer";
import GaleriCardContainer from "@/components/GaleriCardContainer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen">
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('hero.jpg')" }}
        >
          <div className="z-10 flex items-center px-2 md:px-16 justify-center h-full text-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Selamat Datang Di Situs Resmi Kelurahan Tanjung, Tasikmalaya
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, numquam.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-black my-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
              Berita Terkini
            </h1>
            <BeritaCardContainer />
            <div className=" px-16 md:px-24 mt-12">
              <div className="border-b-4 border-lime-400"></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-black my-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
              Galeri
            </h1>
            <GaleriCardContainer />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
