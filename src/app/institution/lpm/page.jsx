import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCheck } from "react-icons/fa";

export default function Lpm() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen mt-20">
        <div className="container px-5 md:px-8">
          <span className="text-lime-500 text-nowrap flex items-center">
            <p className="text-lg">Beranda &gt; Lembaga</p>
            <p className="text-lg text-black ml-2">&gt; LPM</p>
          </span>
          <h1 className="text-3xl text-lime-500 font-semibold underline">
            RT/RW
          </h1>
          <div className="px-0 mt-12 text-center">
            <h2 className="font-semibold my-2 text-2xl">
              DIGUNAKAN UNTUK INFORMASI LPM
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
